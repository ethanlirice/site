---
title: Step-level preemption for co-serving diffusion models
blurb: GPU allocation and preemption for image/video diffusion inference
org: Rice University School of Engineering & Computing
role: ML Engineering Researcher
dates: October 2026 — Present
year: '2026–'
status: ongoing
stack: [PyTorch, CUDA]
order: 10
---

Diffusion inference is a long sequence of near-identical denoising steps, which
makes it unusually preemptible compared to autoregressive decoding — a step
boundary is a natural yield point. I'm researching how to exploit that for
GPU allocation when image and video diffusion models share a device.

Targeting **OSDI '27**.
