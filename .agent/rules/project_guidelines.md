# BlogApp Project Rules & Guidelines

These guidelines apply across the BlogApp repository when implementing features, fixing bugs, or refactoring code.

---

## 1. Backend Standards (Node.js & Express)
* **Module System**: Use ES Modules (`import`/`export`). Keep `"type": "module"` in `package.json`.
* **Async Handling**: Use `async`/`await` with structured `try/catch` blocks in all controller methods.
* **Response Format**: Maintain consistent JSON response envelopes:
  * Success: `{ success: true, message?: string, data: ... }`
  * Error: `{ success: false, message: string, error?: string }`
* **Status Codes**:
  * `200` for successful GET/PUT/PATCH/DELETE
  * `201` for created resources
  * `400` for bad client input or missing required fields
  * `404` for missing resources
  * `500` for internal server errors
* **Security & Inputs**: Always trim input strings. Sanitize search queries where appropriate.

---

## 2. Frontend Standards (Flutter & Dart)
* **Architecture**: Keep code modular:
  * `screens/`: Top-level page views.
  * `models/`: Dart data models with `fromJson` and `toJson` methods matching the backend Blog schema.
  * `services/`: API interaction layer (HTTP service) separating UI from network logic.
  * `widgets/`: Reusable UI components (blog cards, input forms, headers, loaders).
* **State Management**: Keep UI responsive with proper loading, error, and empty states.
* **Platform Adaptability**: Support dynamic API base URLs (handle web `localhost`, Android emulator `10.0.2.2`, or environment variable/configuration).
* **UI/UX Quality**: Follow modern Material 3 design principles with smooth interactions, proper spacing, typography, and image fallback handling.
