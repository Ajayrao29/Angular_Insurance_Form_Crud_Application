# Insurance Management Application

A complete Angular (standalone) Insurance Management Application built with Angular 15+, JSON Server, Reactive Forms, and Bootstrap.

## Features

✅ **Standalone Components** - Modern Angular architecture using standalone components  
✅ **Complete CRUD Operations** - Create, Read, Update, and Delete insurance records  
✅ **Reactive Forms** - Form validation with custom validators  
✅ **JSON Server Backend** - Easy backend setup with db.json  
✅ **Bootstrap Styling** - Responsive and beautiful UI  
✅ **HTTP Client Integration** - RESTful API communication  
✅ **Angular Router** - Standalone routing configuration  
✅ **Type-Safe** - Full TypeScript support with proper interfaces  

## Project Structure

```
insurance-management-app/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── add-insurance/
│   │   │   │   ├── add-insurance.component.ts
│   │   │   │   ├── add-insurance.component.html
│   │   │   │   └── add-insurance.component.css
│   │   │   ├── view-insurance/
│   │   │   │   ├── view-insurance.component.ts
│   │   │   │   ├── view-insurance.component.html
│   │   │   │   └── view-insurance.component.css
│   │   │   └── update-insurance/
│   │   │       ├── update-insurance.component.ts
│   │   │       ├── update-insurance.component.html
│   │   │       └── update-insurance.component.css
│   │   ├── models/
│   │   │   └── insurance.model.ts
│   │   ├── services/
│   │   │   └── insurance.service.ts
│   │   ├── app.routes.ts
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   └── app.component.css
│   ├── environments/
│   │   ├── environment.ts
│   │   └── environment.prod.ts
│   ├── styles.css
│   ├── main.ts
│   ├── index.html
│   └── polyfills.ts
├── angular.json
├── tsconfig.json
├── package.json
└── db.json (JSON Server database)
```

## Insurance Model

```typescript
interface Insurance {
  id?: number;
  holderName: string;
  policyType: string;
  premium: number;
  startDate: string;
  endDate: string;
  nominee: string;
  status: 'Active' | 'Inactive';
}
```

## Installation

### Prerequisites
- Node.js (v16+)
- npm (v8+)

### Steps

1. **Clone or navigate to the project directory**
   ```bash
   cd insurance-management-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install JSON Server globally** (optional but recommended)
   ```bash
   npm install -g json-server
   ```

## Running the Application

### Option 1: Run Angular App and JSON Server Separately

**Terminal 1 - Start Angular Dev Server:**
```bash
npm start
```
The app will be available at `http://localhost:4200`

**Terminal 2 - Start JSON Server:**
```bash
npm run server
```
JSON Server will be available at `http://localhost:3000`

### Option 2: Run Both Simultaneously

```bash
npm run dev
```
This uses `concurrently` to run both servers at the same time.

## Available Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | ViewInsuranceComponent | Home page - View all insurances |
| `/add` | AddInsuranceComponent | Add new insurance record |
| `/view` | ViewInsuranceComponent | View/List all insurances |
| `/update/:id` | UpdateInsuranceComponent | Edit insurance record |

## API Endpoints (JSON Server)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/insurances` | Get all insurance records |
| GET | `/insurances/:id` | Get insurance by ID |
| POST | `/insurances` | Add new insurance |
| PUT | `/insurances/:id` | Update insurance |
| DELETE | `/insurances/:id` | Delete insurance |

## Components

### 1. **AddInsuranceComponent**
- Add new insurance records
- Reactive form with validation
- Custom date validator (end date after start date)
- Success/error messages

### 2. **ViewInsuranceComponent**
- Display all insurance records in a table
- Edit and Delete actions
- Status badge (Active/Inactive)
- Loading state
- Delete confirmation

### 3. **UpdateInsuranceComponent**
- Edit existing insurance records
- Pre-populate form with current data
- Same validation as Add component
- Navigate back to view after update

## Form Validation

### Validation Rules
- **Holder Name**: Required, minimum 3 characters
- **Policy Type**: Required
- **Premium**: Required, must be positive (> 0)
- **Start Date**: Required
- **End Date**: Required, must be after start date
- **Nominee**: Required, minimum 3 characters
- **Status**: Required

## Service Methods

```typescript
// InsuranceService
getAll(): Observable<Insurance[]>
getById(id: number): Observable<Insurance>
addInsurance(insurance: Insurance): Observable<Insurance>
updateInsurance(id: number, insurance: Insurance): Observable<Insurance>
deleteInsurance(id: number): Observable<void>
```

## Styling

- **Bootstrap 5.3** - Responsive grid and components
- **Bootstrap Icons** - Icon library
- **Custom CSS** - Additional styling in component CSS files
- **Color Scheme**:
  - Primary: `#0d6efd` (Blue)
  - Success: `#198754` (Green)
  - Danger: `#dc3545` (Red)
  - Warning: `#ffc107` (Yellow)
  - Info: `#0dcaf0` (Cyan)

## Key Features Explained

### Standalone Components
All components are standalone, no NgModule required.

### Reactive Forms
Uses FormBuilder with custom validators:
- Required field validation
- Min/Max validators
- Custom date range validator

### HTTP Client Integration
- Injected into service
- Standalone provider configuration
- Error handling

### Angular Router
- Standalone routing configuration in `app.routes.ts`
- No routing module required
- Dynamic route parameters for edit

## Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Environment Configuration

### Development (environment.ts)
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000'
};
```

### Production (environment.prod.ts)
```typescript
export const environment = {
  production: true,
  apiUrl: 'http://localhost:3000'
};
```

## Troubleshooting

### Port Already in Use
If port 4200 or 3000 is already in use:

**For Angular (change port):**
```bash
ng serve --port 4201
```

**For JSON Server (change port):**
```bash
json-server --watch db.json --port 3001
```

Update the `apiUrl` in the service accordingly.

### CORS Issues
JSON Server has CORS enabled by default. If you face CORS issues, ensure JSON Server is running on the expected port.

### Form Not Submitting
Make sure all required fields are filled and pass validation. Check browser console for error messages.

## Best Practices Implemented

✅ Type Safety - Full TypeScript support  
✅ Code Organization - Clear component separation  
✅ Error Handling - Try-catch and error messages  
✅ User Feedback - Success/error alerts  
✅ Responsive Design - Mobile-friendly UI  
✅ Accessibility - Semantic HTML and labels  
✅ Performance - OnPush change detection ready  
✅ Clean Code - Readable and maintainable structure  

## Learning Resources

- [Angular Official Docs](https://angular.io/docs)
- [Angular Standalone Components](https://angular.io/guide/standalone-components)
- [Angular Reactive Forms](https://angular.io/guide/reactive-forms)
- [JSON Server](https://github.com/typicode/json-server)
- [Bootstrap 5](https://getbootstrap.com/)

## License

This project is open-source and available under the MIT License.

## Author

Created as a complete learning example for Angular 15+ with modern standalone component architecture.

---

**Happy Coding! 🚀**
#   A n g u l a r _ I n s u r a n c e _ F o r m _ C r u d _ A p p l i c a t i o n  
 