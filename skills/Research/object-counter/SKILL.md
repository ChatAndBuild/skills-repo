---
id: object-counter
name: Object Counter
description: Step-by-step guidance for object counter workflows and best practices.
category: Research
requires: []
examples:
  - Provide a step-by-step guide for using the object counter.
  - What are the best practices for object counting workflows?
---

# Object Counter

Support object counter workflows with clear steps and best practices.

## Instruction
- Identify the target objects for counting (e.g., cells, vehicles, or consumer products) and ensure image/video quality is sufficient.
- Select the appropriate detection model (e.g., YOLO, Faster R-CNN) based on the balance between speed and accuracy requirements.
- Define specific Regions of Interest (ROI) or count lines to focus the analysis and avoid false positives in background areas.
- Execute the counting algorithm across frames, implementing tracking logic to ensure moving objects are not counted multiple times.
- Apply confidence thresholds to filter out weak detections and improve the overall reliability of the count.
- Visualize the results by overlaying bounding boxes or heatmaps and logging the final count with timestamps.

## When to Use
- When automating inventory counting, retail foot traffic analysis, or biological cell counting in microscopy.
- When monitoring production lines or traffic flow through real-time camera feeds.
- When performing research on satellite or aerial imagery to quantify large-scale objects.

## Output
- A summarized count report including total objects detected and per-category breakdowns.
- Annotated images or video clips highlighting the detected and counted objects.
- Structured data logs (CSV or JSON) containing counts, timestamps, and confidence scores.