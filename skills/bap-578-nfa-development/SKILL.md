---
id: bap-578-nfa-development
name: BAP-578 NFA Development
description: Build Non-Fungible Agents (NFAs) on BNB Chain using the BAP-578 standard. Covers contract architecture, agent lifecycle, metadata, funding, security patterns, and deployment.
category: Blockchain
author: saiboyizhan
version: 1.0.0
requires: []
examples:
  - "How do I create an NFA contract using BAP-578?"
  - "What is the difference between BAP-578 and ERC-721?"
  - "Help me deploy an NFA agent on BNB Chain"
  - "How does agent funding and withdrawal work in BAP-578?"
---

# BAP-578 NFA Development

Guide for building Non-Fungible Agents (NFAs) on BNB Chain using the BAP-578 standard — the first BNB Chain Application Proposal for on-chain AI agents.

## What is BAP-578?

BAP-578 is a token standard that extends ERC-721 to support autonomous AI agents as on-chain assets. Unlike static NFTs, each NFA has:

- **Agent State** — balance, active status, logic address, creation timestamp
- **Extended Metadata** — persona, experience, voice, animation, vault storage
- **Funding Mechanism** — agents hold and manage their own ETH/BNB
- **Upgradeable Logic** — swap the agent's brain (logic contract) without changing identity
- **Lifecycle Management** — active/paused states with owner control
- **UUPS Upgradeability** — contract can be upgraded while preserving state

Key difference from ERC-721: an NFA is not just an ownable token — it is an autonomous entity with funds, state, and upgradeable behavior.

## Contract Architecture

BAP-578 inherits from:

```
ERC721Upgradeable
ERC721EnumerableUpgradeable
ERC721URIStorageUpgradeable
ReentrancyGuardUpgradeable
OwnableUpgradeable
UUPSUpgradeable
```

### Core Structs

```solidity
struct AgentMetadata {
    string persona;       // JSON: character traits, style, tone
    string experience;    // Agent's role/purpose summary
    string voiceHash;     // Reference to stored audio profile
    string animationURI;  // URI to video/animation
    string vaultURI;      // URI to extended data storage
    bytes32 vaultHash;    // Hash for vault content verification
}

struct AgentState {
    uint256 balance;       // Agent's held funds
    bool active;           // Active or paused
    address logicAddress;  // Upgradeable logic contract
    uint256 createdAt;     // Birth timestamp
}
```

## Core Operations

### 1. Minting an Agent

```solidity
function createAgent(
    address to,
    address logicAddress,
    string memory metadataURI,
    AgentMetadata memory extendedMetadata
) external payable returns (uint256)
```

- Costs `0.01 ether` (or free if free mints remain)
- `logicAddress` must be `address(0)` or a deployed contract
- Free-minted agents are **non-transferable** (soulbound)
- Mint fee goes to treasury address

### 2. Funding an Agent

```solidity
function fundAgent(uint256 tokenId) external payable
```

- Anyone can fund any agent
- Funds are tracked per-agent in `agentStates[tokenId].balance`

### 3. Withdrawing Funds

```solidity
function withdrawFromAgent(uint256 tokenId, uint256 amount) external
```

- Only token owner can withdraw
- Uses Checks-Effects-Interactions pattern
- Balance updated before external call (reentrancy safe)

### 4. Upgrading Agent Logic

```solidity
function setLogicAddress(uint256 tokenId, address newLogicAddress) external
```

- Swap the agent's logic contract without changing its identity or balance
- New address must be `address(0)` or a deployed contract

### 5. Updating Metadata

```solidity
function updateAgentMetadata(
    uint256 tokenId,
    string memory newMetadataURI,
    AgentMetadata memory newExtendedMetadata
) external
```

- Update persona, experience, voice, animation, vault
- Only token owner can update

## Security Patterns

Patterns implemented in the reference contract:

1. **ReentrancyGuard** on fund-moving functions (`createAgent`, `withdrawFromAgent`)
2. **Checks-Effects-Interactions** — state updated before external calls in `withdrawFromAgent`
3. **Logic address validation** — must be `address(0)` or a contract (`code.length > 0`)
4. **Balance-before-burn** — `_burn()` reverts if agent holds funds (`balance must be 0`)
5. **Free mint soulbound** — free-minted tokens cannot be transferred (only mint/burn)
6. **Receive fallback reverts** — prevents accidental ETH sends (use `fundAgent()`)
7. **Treasury validation** — treasury address cannot be zero

### Best Practices for Implementations

- Never use `transfer()` or `send()` for ETH — use `call{value:}("")`
- Track a `totalAgentBalances` variable to ensure `address(this).balance >= totalAgentBalances` always holds
- Add `nonReentrant` to `fundAgent()` as well, not just withdrawal functions
- On UUPS upgrades, use `reinitializer(N)` to initialize new state variables safely
- Emergency withdraw should only touch unallocated funds, never agent balances

## Deployment (BNB Chain)

### Using Hardhat + UUPS Proxy

```javascript
const { ethers, upgrades } = require("hardhat");

async function main() {
  const BAP578 = await ethers.getContractFactory("BAP578");
  const proxy = await upgrades.deployProxy(
    BAP578,
    ["MyAgent", "AGENT", treasuryAddress],
    { initializer: "initialize", kind: "uups" }
  );
  await proxy.deployed();
  console.log("BAP-578 NFA deployed to:", proxy.address);
}
```

### Network Config

```javascript
// hardhat.config.js
networks: {
  bscMainnet: {
    url: "https://bsc-dataseed.binance.org/",
    chainId: 56,
    accounts: [process.env.PRIVATE_KEY]
  },
  bscTestnet: {
    url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
    chainId: 97,
    accounts: [process.env.PRIVATE_KEY]
  }
}
```

## Building Agent Logic Contracts

The `logicAddress` field points to an external contract that implements the agent's behavior. This enables upgrading an agent's brain without changing its on-chain identity. Example pattern:

```solidity
// Example interface (not part of the standard yet — define per use case)
interface IAgentLogic {
    function execute(uint256 tokenId, bytes calldata data) external returns (bytes memory);
}

contract MyAgentLogic is IAgentLogic {
    function execute(uint256 tokenId, bytes calldata data) external returns (bytes memory) {
        // Decode instruction, interact with external protocols, return result
    }
}
```

The NFA contract calls the logic contract via `logicAddress`. To upgrade behavior, deploy a new logic contract and call `setLogicAddress()`.

## References

- **Standard**: BAP-578 (first BNB Chain Application Proposal)
- **Repository**: ChatAndBuild/non-fungible-agents-BAP-578 on GitHub
- **Network**: BNB Smart Chain (mainnet chainId 56, testnet chainId 97)
- **Website**: nonfungibleagents.com
