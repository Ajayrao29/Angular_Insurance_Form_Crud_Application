# 🚀 Insurance Management Application - Quick Start Guide

## What Has Been Created?

A production-ready **Angular 15+ Standalone Insurance Management Application** with:

- ✅ 3 Complete CRUD Components (Add, View, Update)
- ✅ Full TypeScript Support
- ✅ Reactive Forms with Validation
- ✅ Bootstrap 5 Responsive UI
- ✅ JSON Server Backend
- ✅ RESTful API Integration
- ✅ Standalone Router Configuration
- ✅ Professional Documentation

## 📁 Complete Project Structure

```
insurance-management-app/
│
├── 📄 package.json                 # Dependencies & scripts
├── 📄 angular.json                 # Angular configuration
├── 📄 tsconfig.json                # TypeScript configuration
├── 📄 db.json                      # JSON Server database (with sample data)
├── 📄 README.md                    # Complete documentation
├── 📄 QUICK_START.md              # This file
│
└── 📂 src/
    ├── 📄 index.html               # HTML entry point
    ├── 📄 main.ts                  # Bootstrap file
    ├── 📄 polyfills.ts             # Polyfills
    ├── 📄 styles.css               # Global styles
    │
    ├── 📂 app/
    │   ├── 📄 app.routes.ts        # Standalone router configuration
    │   ├── 📄 app.component.ts     # Root component
    │   ├── 📄 app.component.html   # Navigation & layout
    │   ├── 📄 app.component.css    # Root styles
    │   │
    │   ├── 📂 models/
    │   │   └── 📄 insurance.model.ts    # Insurance interface
    │   │
    │   ├── 📂 services/
    │   │   └── 📄 insurance.service.ts  # CRUD service (HttpClient)
    │   │
    │   └── 📂 components/
    │       ├── 📂 add-insurance/
    │       │   ├── add-insurance.component.ts
    │       │   ├── add-insurance.component.html
    │       │   └── add-insurance.component.css
    │       ├── 📂 view-insurance/
    │       │   ├── view-insurance.component.ts
    │       │   ├── view-insurance.component.html
    │       │   └── view-insurance.component.css
    │       └── 📂 update-insurance/
    │           ├── update-insurance.component.ts
    │           ├── update-insurance.component.html
    │           └── update-insurance.component.css
    │
    ├── 📂 environments/
    │   ├── environment.ts           # Development config
    │   └── environment.prod.ts      # Production config
    │
    └── 📂 assets/                   # Static assets (images, etc.)
```

## 🎯 Insurance Fields

Each insurance record contains:
- **id** (number) - Auto-generated
- **holderName** (string) - Name of the policy holder
- **policyType** (string) - Type: Health, Life, Auto, Home, Travel
- **premium** (number) - Monthly/Annual premium amount
- **startDate** (date) - Policy start date
- **endDate** (date) - Policy end date (must be after start date)
- **nominee** (string) - Beneficiary name
- **status** (string) - Active or Inactive

## 🔧 Installation & Setup

### Step 1: Navigate to Project
```powershell
cd "c:\Users\AJAY LINGAMPALLI\OneDrive\Documents\ins-app"
```

### Step 2: Install Dependencies
```powershell
npm install
```

This will install:
- Angular 15.2.0
- Bootstrap 5.3.0
- JSON Server 0.17.3
- RxJS, TypeScript, and more

### Step 3: Start the Application

**Option A: Run Both Servers Together (Recommended)**
```powershell
npm run dev
```

**Option B: Run Separately (2 terminals)**

Terminal 1 - Start Angular Dev Server:
```powershell
npm start
```
→ App opens at **http://localhost:4200**

Terminal 2 - Start JSON Server:
```powershell
npm run server
```
→ API available at **http://localhost:3000/insurances**

## 🌐 Using the Application

### Home Page (View Insurances)
- **Route:** `http://localhost:4200/view`
- **Features:**
  - Display all insurance records in a table
  - Edit button for each record
  - Delete button with confirmation
  - Status badge (Active/Inactive)
  - Formatted dates
  - Loading spinner

### Add Insurance
- **Route:** `http://localhost:4200/add`
- **Features:**
  - Form with validation
  - Required field indicators
  - Real-time error messages
  - Success notification
  - Auto-redirect to view

### Edit Insurance
- **Route:** `http://localhost:4200/update/:id`
- **Features:**
  - Pre-populated form
  - Same validation as add
  - Confirmation message
  - Cancel button

## ✅ Form Validation Rules

| Field | Rules |
|-------|-------|
| **Holder Name** | Required, Min 3 characters |
| **Policy Type** | Required (dropdown) |
| **Premium** | Required, Must be > 0 |
| **Start Date** | Required |
| **End Date** | Required, Must be after start date |
| **Nominee** | Required, Min 3 characters |
| **Status** | Required (Active/Inactive) |

## 📊 API Endpoints

All endpoints at `http://localhost:3000/insurances`

```http
GET    /insurances              # Get all records
GET    /insurances/1            # Get by ID
POST   /insurances              # Create new
PUT    /insurances/1            # Update
DELETE /insurances/1            # Delete
```

## 📦 Sample Data

The db.json includes 5 sample insurance records:
1. Rajesh Kumar - Health Insurance
2. Priya Sharma - Life Insurance
3. Arjun Singh - Auto Insurance
4. Neha Patel - Home Insurance
5. Amit Gupta - Travel Insurance

## 🎨 Styling

- **Framework:** Bootstrap 5.3
- **Icons:** Bootstrap Icons
- **Colors:**
  - Primary: Blue (#0d6efd)
  - Success: Green (#198754)
  - Danger: Red (#dc3545)
  - Warning: Yellow (#ffc107)
  - Info: Cyan (#0dcaf0)

## 🔑 Key Technologies

| Technology | Version | Purpose |
|-----------|---------|---------|
| Angular | 15.2.0 | Frontend framework |
| TypeScript | 4.9.4 | Type safety |
| Bootstrap | 5.3.0 | Styling |
| RxJS | 7.8.0 | Reactive programming |
| JSON Server | 0.17.3 | Backend mock |
| HttpClient | 15.2.0 | API calls |

## 🐛 Troubleshooting

### Issue: Port 4200 already in use
```powershell
ng serve --port 4201
```

### Issue: Port 3000 already in use
```powershell
npm run server -- --port 3001
```

### Issue: npm install fails
```powershell
# Clear cache and reinstall
npm cache clean --force
rm -r node_modules
npm install
```

### Issue: CORS errors
- Ensure JSON Server is running on port 3000
- Check browser console for exact error
- Verify API URL in service

## 📚 Project Commands

```powershell
npm start              # Run Angular dev server
npm run server         # Run JSON Server
npm run dev            # Run both simultaneously
npm run build          # Build for production
ng serve --port 4201   # Run on different port
json-server --help     # JSON Server help
```

## 🚀 Production Build

```powershell
npm run build
```

Output: `dist/insurance-management-app/`

Then serve:
```powershell
npx http-server dist/insurance-management-app -p 8080
```

## 📖 Code Examples

### Getting All Insurances (Service)
```typescript
this.insuranceService.getAll().subscribe({
  next: (insurances) => {
    this.insurances = insurances;
  },
  error: (error) => {
    console.error('Error:', error);
  }
});
```

### Form Validation (Component)
```typescript
this.insuranceForm = this.formBuilder.group({
  holderName: ['', [Validators.required, Validators.minLength(3)]],
  premium: ['', [Validators.required, Validators.min(0.01)]],
  // ... other fields
}, { validators: this.dateValidator });
```

### HTTP Request (Service)
```typescript
addInsurance(insurance: Insurance): Observable<Insurance> {
  return this.http.post<Insurance>(this.apiUrl, insurance);
}
```

## ✨ Features Implemented

- ✅ Standalone Components (No NgModule)
- ✅ Reactive Forms with Custom Validators
- ✅ CRUD Operations (Create, Read, Update, Delete)
- ✅ Error Handling with User Feedback
- ✅ Loading States
- ✅ Responsive Design
- ✅ Date Validation
- ✅ Type-Safe Code
- ✅ Bootstrap Integration
- ✅ Clean Architecture

## 🎓 Learning Points

This project demonstrates:
- Modern Angular standalone components
- Reactive Forms implementation
- Service-based architecture
- HttpClient for API calls
- RxJS observables
- Angular Router with parameters
- Bootstrap responsive design
- Form validation
- Error handling
- Best practices

## 📝 Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Run the application: `npm run dev`
3. ✅ Open browser: `http://localhost:4200`
4. ✅ Test CRUD operations
5. ✅ Explore the code
6. ✅ Customize as needed

## 🤝 Support

For issues or questions:
1. Check the README.md for detailed docs
2. Review browser console for errors
3. Verify JSON Server is running
4. Check network tab in DevTools

## 📄 License

Open source - Free to use and modify

---

**Happy Learning! 🎉**

Start by running: `npm install && npm run dev`
