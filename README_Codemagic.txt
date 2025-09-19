Pasos para compilar en Codemagic (APK):
1. Sube el contenido del ZIP a un repo en GitHub/GitLab/Bitbucket.
2. Conecta ese repo en Codemagic.
3. Selecciona el workflow 'react-native-apk' definido en codemagic.yaml.
4. Lanza el build.
5. Al finalizar, descarga el APK desde la sección Artifacts.

Notas:
- Usa node:16 porque es estable con Expo SDK 48.
- Se reemplazó 'npm ci' por 'npm install' para evitar error de lockfile.
