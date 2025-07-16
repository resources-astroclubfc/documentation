
Otoroshi `v16.24.0_1742549915` is available. It includes LLM extension [v0.0.42](https://github.com/cloud-apim/otoroshi-llm-extension/releases/tag/0.0.42) with multiple bug fixes, model management improvements, more guardrails features and per-provider context introduced in [v0.0.39](https://github.com/cloud-apim/otoroshi-llm-extension/releases/tag/0.0.39).

Biscuit Studio [0.0.10](https://github.com/cloud-apim/otoroshi-biscuit-studio/releases/tag/0.0.10) is also included with multiple bug fixes, but also public key pair exposition, Biscuit verifiers chaining, Biscuit token and connected user extraction introduced in [v0.0.8](https://github.com/cloud-apim/otoroshi-biscuit-studio/releases/tag/0.0.8).

To update just set `CC_OTOROSHI_VERSION` of the add-on's Java application to `v16.24.0_1742549915` and rebuild it. You can also delete `CC_OTOROSHI_APIM_VERSION`, `CC_OTOROSHI_SECRET` variables from the Java application, they are not used anymore.

- [Learn more about Otoroshi with LLM on Clever Cloud](/developers/doc/addons/otoroshi/)


