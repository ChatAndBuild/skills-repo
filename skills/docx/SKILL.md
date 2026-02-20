---
id: docx
category: productivity
name: docx
description: "Use this skill whenever the user wants to create, read, edit, or manipulate Word documents (.docx files). Triggers include: any mention of \"Word doc\", \"word document\", \".docx\", or requests to produce professional documents with formatting like tables of contents, headings, page numbers, or letterheads. Also use when extracting or reorganizing content from .docx files, inserting or replacing images in documents, performing find-and-replace in Word files, working with tracked changes or comments, or converting content into a polished Word document. If the user asks for a \"report\", \"memo\", \"letter\", \"template\", or similar deliverable as a Word or .docx file, use this skill. Do NOT use for PDFs, spreadsheets, Google Docs, or general coding tasks unrelated to document generation."
license: Proprietary. LICENSE.txt has complete terms
---

# DOCX creation, editing, and analysis

Use this skill when the user needs to create, read, edit, or manipulate .docx files.

## Read and inspect
- Extract text (with tracked changes): `pandoc --track-changes=all file.docx -o output.md`
- Inspect structure: `python scripts/office/unpack.py file.docx unpacked/`

## Convert legacy .doc
- Convert before editing: `python scripts/office/soffice.py --headless --convert-to docx file.doc`

## Create new document
- Generate with docx-js (`npm install -g docx`)
- Validate after creation: `python scripts/office/validate.py file.docx`

## Edit existing document
- Unpack, edit XML, validate, and repack using the provided office scripts

## Output expectations
- Summarize edits, files touched, and how to regenerate the final .docx
