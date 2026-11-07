---
title: Sequence distillation of video diffusion transformers
blurb: Attacking the 2,880x KV-cache memory overhead in video diffusion
org: University of Washington RAIVN Lab
role: Research Intern
dates: May 2026 — August 2026
year: '2026'
status: complete
stack: [PyTorch]
order: 9
---

Video diffusion transformers carry a KV cache whose memory overhead reaches
**2,880x** that of the model weights, which is what keeps long-horizon
generation off commodity hardware.

I developed a sequence distillation approach to that overhead, implementing
teacher-student layer-wise hidden-state matching so the student preserves the
teacher's behavior over arbitrary future tokens rather than only the next few.
