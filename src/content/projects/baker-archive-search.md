---
title: Baker Archive Search
blurb: Search engine over OCR text from ~1,300 digital archives
year: '2026–'
stack: [InvenioRDM, OpenSearch, Python]
featured: true
order: 9
---

A search engine over the Baker Institute's digital archives, built with
[RiceApps](https://riceapps.org). Roughly 1,300 documents exist as scanned PDFs
whose text was locked inside the images.

## Scope

I designed the indexing and retrieval pipeline end to end: extracted OCR text,
through analysis and indexing in OpenSearch, to ranked and filterable results
that link back to the exact source PDF.

The interesting constraint is that OCR output is noisy, so the ranking has to
stay useful when the index itself contains errors the user never typed.
