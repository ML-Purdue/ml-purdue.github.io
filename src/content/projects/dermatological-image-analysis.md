---
name: Dermatological Image Analysis
desc: >-
  Fine-tuning vision models to grade acne severity and classify scars,
  closing the accuracy gap on darker skin tones.
status: archived
startTerm: 2026-spring
endTerm: 2026-spring
pm: Ishaan Buddharaju
advisor: Dr. Josephine Nguyen
domain: [Computer Vision, Healthcare]
hoursPerWeek: "4-6"
openings: "4-6"
skills: >-
  Core scope — fine-tuning pretrained vision models using established PEFT
  libraries (HuggingFace PEFT, LoRA), following documented workflows with
  structured guidance from the PM. Optional advanced extensions: VLM fine-tuning
  with QLoRA quantization, custom multimodal fusion architectures,
  fairness-aware loss functions, or contributing to a workshop paper.
links:
  - {
      label: Dr. Josephine Nguyen,
      url: https://www.linkedin.com/in/josephine-nguyen-a52a3047/,
    }
---

## Our DNA

Skinapse Labs is a startup developing B2B dermatologic assessment and recommender
systems. Within the medical field, dermatology often falls short in holistic
patient care — especially the integration of external patient context, and
analysis across darker skin tones (Fitzpatrick categories III–VI). As a result,
many patients rely on self-built skincare recommendations and over-the-counter
routines that can worsen symptoms.

Skinapse aims to solve three problems: better integration of patient history to
understand possible symptom causes; training and algorithmic adjustment for
darker skin tones, especially in South and Southeast Asia; and more accurate,
rigorously cross-validated models than other skin AI tools in this newly
developing market.

Toward those efforts, Skinapse has started practical testing by deploying the
model with partnered schools in the U.S. and India, medical non-profits, and
Mayo Clinic–backed skincare companies. The startup received first place in
Northeastern's Entrepreneurship Husky Startup Challenge in 2024.

## The Project

This project explores multimodal foundation models and vision-language models
(VLMs) for dermatological image analysis, focusing on acne severity grading and
scar classification. Scar classification is a particularly challenging area of
research in which existing models primarily address lighter Fitzpatrick skin
tones, which is why we seek to augment existing datasets and fine-tune models
for these demographics. Market analysis also revealed gaps in skincare education
within these regions and certain segments of the United States, which is why
we'd like to experiment with VLMs — an emerging tool for dermatological
diagnoses and education.

The project breaks into two or three sections depending on member skills:

**Section 1 — Vision Encoder Adaptation.** Evaluate parameter-efficient
fine-tuning (PEFT) methods for adapting pretrained vision encoders (ViT, DINOv2)
to skin lesion classification. Starting with linear probing as a baseline, we
systematically compare LoRA, Adapters, and BitFit to determine which approach
yields the best accuracy-compute tradeoff.

**Section 2 — Quiz Input Pathway.** In parallel, develop a separate
LoRA-adapted pathway for processing structured patient history input (skin type,
symptom duration, medication history, allergies, lifestyle factors). These
embeddings feed into our existing diagnostic architecture, letting us measure
the independent contribution of patient metadata.

**Section 3a — Multimodal Fusion.** Investigate fusion strategies (late fusion,
attention-based, cross-modal transformers) combining vision encoder outputs with
quiz embeddings to improve diagnostic accuracy.

**Section 3b — Conversational Interface** (stretch / later semesters). If
compute permits, explore fine-tuning a small VLM to generate natural language
explanations alongside diagnoses.

## Core Research Questions

1. How do LoRA, Adapters, and BitFit compare for adapting vision encoders to
   skin lesion classification, and where is the accuracy-compute Pareto frontier?
2. Can a lightweight LoRA-adapted text encoder for quiz responses improve
   Bayesian Network diagnostic accuracy beyond image features alone?
3. What multimodal fusion strategies are most effective when combining image
   features with patient metadata?
4. How does model performance vary across Fitzpatrick skin types III–VI, and can
   targeted augmentation (Mixup, style transfer) mitigate disparities?

Outputs will directly inform Skinapse's production system, potentially replacing
or augmenting the current deep learning + statistical diagnostic system.

## Primary Datasets

**Fitzpatrick17k** — 16,577 clinical images from the DermaAmin and Atlas
Dermatologico atlases, covering 114 skin conditions with Fitzpatrick skin type
labels (I–VI). It's the primary benchmark for evaluating algorithmic fairness
across skin tones and includes diverse conditions beyond melanoma. Limitations:
skews toward lighter skin (only 3.97% Fitzpatrick VI), and diagnosis labels are
not histopathologically confirmed. Available at
[github.com/mattgroh/fitzpatrick17k](https://github.com/mattgroh/fitzpatrick17k)
(CC-BY-NC).

**DermaCon-IN (2025)** — 5,450 clinical images from 3,002 patients across South
Indian outpatient clinics, covering 245 distinct diagnoses with a hierarchical
taxonomy and both Fitzpatrick and Monk Skin Tone ratings. Strong Fitzpatrick
III–V representation aligns with Skinapse's South and Southeast Asian target
markets, and it captures the tropical disease spectrum (fungal, parasitic
conditions). Anatomical body-part labels plus 47 lesion descriptor concepts
enable explainable modeling. Available via Harvard Dataverse (CC-BY-NC-SA 4.0).

Supplementary datasets for advanced extensions: SCIN (Google, 10K+ images with
balanced FST), ACNE04 (1,457 acne images with lesion boxes), and ISIC 2024
SLICE-3D (400K skin lesion crops).
