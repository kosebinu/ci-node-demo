# CI/CD Pipeline with GitHub Actions, Docker, and AKS

This project demonstrates a production-style CI/CD pipeline that automatically builds, tests, containerizes, and deploys a Node.js application to **Azure Kubernetes Service (AKS)** using **GitHub Actions**, **Docker**, and secure **OIDC authentication**.

The goal of this repository is to showcase real-world DevOps practices: automated pipelines, immutable artifacts, secure cloud authentication, and Kubernetes-based deployments.

---

## Architecture Overview

**Flow:**

1. Developer pushes code to `main`
2. GitHub Actions runs CI pipeline
   - Install dependencies
   - Run automated tests
   - Build application
3. Docker image is built and pushed to GitHub Container Registry (GHCR)
4. GitHub Actions authenticates to Azure using OIDC (no passwords or secrets stored)
5. Pipeline connects to AKS
6. Kubernetes Deployment image is updated using commit SHA tag
7. Rolling update is executed and verified using rollout status

---

## Tech Stack

- **Application:** Node.js  
- **CI/CD:** GitHub Actions  
- **Containerization:** Docker  
- **Container Registry:** GitHub Container Registry (GHCR)  
- **Orchestration:** Kubernetes  
- **Cloud Platform:** Azure Kubernetes Service (AKS)  
- **Authentication:** GitHub OIDC → Azure Entra ID  