## Despliegue

GitHub Pages:

https://geffrerson7.github.io/product-landing-page/

## Tokens CSS

| Token | Valor | Uso |
|---------|---------|---------|
| --color-primary | #E98D75 | Botones y elementos principales |
| --color-primary-dark | #FF7A59 | Hover y estados activos |
| --color-secondary | #5F6B3D | Colores secundarios |
| --color-secondary-light | #7B8A52 | Variantes secundarias |
| --color-bg | #F9F2EF | Fondo principal |
| --color-surface | #FBF7F4 | Tarjetas y formularios |
| --color-footer | #F3ECE4 | Pie de página |
| --color-text | #1A1A1A | Texto principal |
| --color-text-muted | #666666 | Texto secundario |
| --color-text-light | #FFF | Texto sobre fondos oscuros |
| --color-border | #E6DDD3 | Bordes generales |
| --color-border-light | #E0E0E0 | Bordes suaves |
| --color-border-input | #D8D8D8 | Bordes de inputs |
| --radius-4 | 4px | Imágenes y elementos pequeños |
| --radius-6 | 6px | Inputs y botones |
| --radius-8 | 8px | Tarjetas |
| --radius-12 | 12px | Formularios |
| --transition-fast | 0.2s ease | Hover rápidos |
| --transition-medium | 0.25s ease | Animaciones intermedias |
| --transition-normal | 0.3s ease | Transiciones generales |

## Validaciones del formulario

| Campo | Atributo | Validación |
|---------|---------|---------|
| Nombre | required | El campo es obligatorio |
| Nombre | minlength="3" | Debe contener al menos 3 caracteres |
| Correo electrónico | required | El campo es obligatorio |
| Correo electrónico | type="email" | Debe tener formato de correo válido |
| Teléfono | required | El campo es obligatorio |
| Teléfono | pattern="[0-9]{9}" | Debe contener exactamente 9 dígitos |
| Motivo | required | Debe seleccionar una opción |
| Mensaje | required (si lo agregaste) | El campo es obligatorio |
| Términos y condiciones | required | Debe aceptar los términos para enviar el formulario |