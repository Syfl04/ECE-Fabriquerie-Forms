// NocoDB Client pour ECE-Fabriquerie
// Pattern réutilisable — voir _System/Patterns/Pattern NocoDB + HTML.md

class NocoDBClient {
  constructor(projectId, token, tableMapping) {
    this.baseUrl = 'https://sheets.viegratuitepourtous.tech/api/v1/db/data/noco';
    this.project = projectId;
    this.token = token;
    this.tableMapping = tableMapping; // Mapping nom → ID
  }

  // Obtenir l'ID de table à partir du nom
  getTableId(tableName) {
    return this.tableMapping[tableName] || tableName;
  }

  // Créer un enregistrement
  async create(table, data) {
    const tableId = this.getTableId(table);
    const response = await fetch(`${this.baseUrl}/${this.project}/${tableId}`, {
      method: 'POST',
      headers: {
        'xc-token': this.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    
    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Erreur NocoDB: ${response.status} - ${error}`);
    }
    
    return response.json();
  }

  // Lire tous les enregistrements
  async readAll(table) {
    const tableId = this.getTableId(table);
    const response = await fetch(`${this.baseUrl}/${this.project}/${tableId}`, {
      headers: { 'xc-token': this.token }
    });
    
    if (!response.ok) {
      throw new Error(`Erreur lecture: ${response.status}`);
    }
    
    return response.json();
  }

  // Lire un enregistrement par ID
  async read(table, id) {
    const tableId = this.getTableId(table);
    const response = await fetch(`${this.baseUrl}/${this.project}/${tableId}/${id}`, {
      headers: { 'xc-token': this.token }
    });
    return response.json();
  }
}

// Configuration ECE-Fabriquerie
// Base ID : p9ngzlodef70wo6 (extrait de l'URL)
// Table IDs extraits des URLs :
// - competences : mzv24ekba4p0l5a
// - strategie (import_strategie_csv) : mzzpf98q4m40p91
// - positionnement (import_positionnement_csv) : mloe61my09i5hjy
const NOCODB_CONFIG = {
  project: 'p9ngzlodef70wo6',
  token: 'nc_pat_rKMIsd_GYNXUA2gU_5qIEaJAt6HASbLdJ0jKkyCq'
};

// Mapping table names → table IDs
// IDs extraits des URLs après import
const TABLE_IDS = {
  'competences': 'myp0n4elh5sn4rr',  // Nouvel ID après import
  'strategie': 'mzzpf98q4m40p91',
  'positionnement': 'mloe61my09i5hjy'
};

// Instance globale avec mapping
const nocoClient = new NocoDBClient(
  NOCODB_CONFIG.project, 
  NOCODB_CONFIG.token,
  TABLE_IDS
);
