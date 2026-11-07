---
title: White Lights
blurb: Real-time computer vision powerlifting judge
year: '2025–'
stack: [Python, YOLO11-Pose, OpenCV]
featured: true
order: 10
---

A real-time powerlifting judge that calls depth, lockout, and bar path from a
single camera, built because local meets rarely have three trained judges and
lifters training alone have none.

## How it works

YOLO11-Pose gives per-frame keypoints; a state machine over hip, knee, and bar
positions segments reps and scores each against USPA judging criteria. The whole
pipeline runs on CPU — a meet venue is the last place to count on a GPU.

- Validated on **5,000+ reps** at **91% accuracy** under competition conditions
- **<120ms** inference latency per frame on CPU
- In use by **25+ competitive powerlifters**

## What was hard

Depth is the call that decides lifts, and it is the one most sensitive to camera
angle. Most of the accuracy work went into normalizing for off-axis setups
rather than into the model itself.
