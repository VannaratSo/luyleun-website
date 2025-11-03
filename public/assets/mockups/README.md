# 📱 Mockup Images Instructions

## How to Add Your Mockup Images

### 1. File Organization

Place your mockup images in this folder: `/public/assets/mockups/`

### 2. Required Images

You need 4 mockup images for each step:

- **Step 1 - Download & Register**: `step1-download.png`
- **Step 2 - Submit Documents**: `step2-documents.png`
- **Step 3 - Get Approved**: `step3-approval.png`
- **Step 4 - Receive Money**: `step4-receive-money.png`

### 3. Image Specifications

- **Recommended Size**: 300x600px (phone aspect ratio)
- **Supported Formats**: PNG, JPG, WebP
- **Background**: Transparent PNG recommended for best results
- **Quality**: High resolution for crisp display

### 4. File Structure

```
public/
└── assets/
    └── mockups/
        ├── step1-download.png
        ├── step2-documents.png
        ├── step3-approval.png
        └── step4-receive-money.png
```

### 5. Customization

After adding your images, the component will automatically use them. The paths are already configured in `/src/components/LoanStep.tsx`.

### 6. Alternative Naming

If you prefer different file names, update the `phoneImage` paths in the `steps` array in `LoanStep.tsx`:

```typescript
// Example with custom names:
phoneImage: "/assets/mockups/your-custom-name.png";
```

---

✨ **Tip**: Test your images by running `npm run dev` and checking the step-by-step section on your website!
