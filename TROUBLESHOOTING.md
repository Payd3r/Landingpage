# Troubleshooting - Portfolio Landing Page

## 🚨 Errori Comuni e Soluzioni

### Errore: "Failed to deploy a stack: compose build operation failed"

**Causa**: Errori TypeScript che impediscono la build.

**Soluzione**:
1. Esegui `npm run build` localmente per verificare errori
2. Risolvi tutti gli errori TypeScript
3. Assicurati che tutti gli import siano corretti
4. Verifica che non ci siano variabili non utilizzate

### Errore: "Docker is not running"

**Causa**: Docker Desktop non è avviato.

**Soluzione**:
1. Avvia Docker Desktop
2. Aspetta che Docker sia completamente caricato
3. Verifica con `docker info`
4. Riprova il comando

### Errore: "Port 80 is already in use"

**Causa**: Un altro servizio sta usando la porta 80.

**Soluzione**:
1. Ferma il servizio che usa la porta 80
2. Oppure cambia la porta nel docker-compose.yml:
   ```yaml
   ports:
     - "8080:80"
   ```

### Errore: "Network web-proxy not found"

**Causa**: La rete Docker non esiste.

**Soluzione**:
1. Crea la rete:
   ```bash
   docker network create web-proxy
   ```
2. Oppure rimuovi la dipendenza dalla rete nel docker-compose.yml

### Errore: "Build failed: npm ci failed"

**Causa**: Problemi con le dipendenze npm.

**Soluzione**:
1. Cancella node_modules e package-lock.json
2. Esegui `npm install` localmente
3. Verifica che package.json sia corretto
4. Riprova il build Docker

### Errore: "TypeScript compilation failed"

**Causa**: Errori di sintassi TypeScript.

**Soluzione**:
1. Controlla tutti i file .tsx e .ts
2. Verifica che tutti gli import siano corretti
3. Assicurati che non ci siano variabili non utilizzate
4. Esegui `npm run build` localmente per vedere gli errori

## 🔧 Comandi di Debug

### Verifica Docker
```bash
docker info
docker version
docker-compose version
```

### Verifica Build Locale
```bash
npm run build
npm run preview
```

### Verifica Container
```bash
docker ps
docker-compose ps
docker logs vetrina_frontend
```

### Pulizia Docker
```bash
docker-compose down
docker system prune -f
docker volume prune -f
```

## 📋 Checklist Pre-Deployment

- [ ] Docker Desktop è avviato
- [ ] `npm run build` funziona localmente
- [ ] Nessun errore TypeScript
- [ ] Tutti gli import sono corretti
- [ ] Porta 80 è libera
- [ ] Rete Docker esiste (se necessario)

## 🆘 Supporto

Se continui ad avere problemi:

1. **Controlla i log**:
   ```bash
   docker-compose logs -f
   ```

2. **Riprova con build pulito**:
   ```bash
   docker-compose down
   docker system prune -f
   docker-compose up -d --build
   ```

3. **Verifica la configurazione**:
   - Dockerfile
   - docker-compose.yml
   - nginx.conf

4. **Testa localmente prima**:
   ```bash
   npm run build
   npm run preview
   ```