import { Lead, LeadInteraction } from '../types';

const LEADS_STORAGE_KEY = 'latamcode_crm_leads';
const CRM_SYNC_EVENT = 'latamcode_crm_sync';

// Initial high-quality seed leads
const SEED_LEADS: Lead[] = [
  {
    id: 'lead-1',
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
    nombre: 'Alejandro Morales',
    empresa: 'Fintech Bancolombia Partners',
    correo: 'a.morales@fintechcol.co',
    telefono: '+57 312 456 7890',
    pais: 'Colombia',
    interes: 'software-a-medida',
    alcance: 'Migración de núcleo transaccional a microservicios elásticos. Req. Certificación PCI-DSS.',
    presupuesto: '$15,000 - $35,000 USD',
    status: 'negociacion',
    interacciones: [
      {
        id: 'note-1-1',
        createdAt: new Date(Date.now() - 2.5 * 24 * 60 * 60 * 1000).toISOString(),
        author: 'Soporte Comercial',
        note: 'Lead capturado automáticamente mediante el formulario de diagnóstico de arquitectura.'
      },
      {
        id: 'note-1-2',
        createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
        author: 'Ing. Preventa',
        note: 'Se envió propuesta técnica pre-estructurada y plan de arquitectura. Agendada llamada técnica para revisión de compliance regulatorio local e impuestos.'
      }
    ]
  },
  {
    id: 'lead-2',
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
    nombre: 'María Fe Gonzales',
    empresa: 'Logística del Sur S.A.',
    correo: 'mfgonzales@logisur.pe',
    telefono: '+51 987 654 321',
    pais: 'Perú',
    interes: 'aplicaciones-moviles',
    alcance: 'App para repartidores con tracking satelital offline y firma digital local.',
    presupuesto: '$5,000 - $15,000 USD',
    status: 'nuevo',
    interacciones: [
      {
        id: 'note-2-1',
        createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
        author: 'Soporte Comercial',
        note: 'Lead ingresado de forma fluida. Requiere facturación local en soles (SOLES / PEN con IGV local).'
      }
    ]
  },
  {
    id: 'lead-3',
    createdAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(), // 6 days ago
    nombre: 'Eduardo Garza',
    empresa: 'Inmobiliaria Regiomontana',
    correo: 'egarza@inmoreg.mx',
    telefono: '+52 81 1234 5678',
    pais: 'México',
    interes: 'automatizacion-ia',
    alcance: 'Clasificador automático de contratos civiles mediante Inteligencia Artificial Generativa.',
    presupuesto: '+$35,000 USD',
    status: 'ganado',
    interacciones: [
      {
        id: 'note-3-1',
        createdAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
        author: 'Soporte Comercial',
        note: 'Interesado en entrenar un modelo que lea cláusulas de rescisión de contratos automáticamente.'
      },
      {
        id: 'note-3-2',
        createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
        author: 'Ing. Preventa',
        note: 'NDA firmado. Se validaron las APIs y se probó un demo técnico conceptual de extracción de datos.'
      },
      {
        id: 'note-3-3',
        createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
        author: 'Finanzas LATAMCODE',
        note: 'Contrato y presupuesto aceptado formalmente. Factura emitida. Sincronización con el equipo técnico iniciada.'
      }
    ]
  }
];

export function getLeads(): Lead[] {
  const stored = localStorage.getItem(LEADS_STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(SEED_LEADS));
    return SEED_LEADS;
  }
  try {
    return JSON.parse(stored);
  } catch (e) {
    console.error('Error al parsear leads, se reestablecen los de respaldo.', e);
    return SEED_LEADS;
  }
}

export function saveLeads(leads: Lead[]): void {
  localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(leads));
  // Notify other components of the update
  window.dispatchEvent(new Event(CRM_SYNC_EVENT));
}

export function addLead(leadData: Omit<Lead, 'id' | 'createdAt' | 'status' | 'interacciones'>): Lead {
  const leads = getLeads();
  const newLead: Lead = {
    ...leadData,
    id: `lead-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    createdAt: new Date().toISOString(),
    status: 'nuevo',
    interacciones: [
      {
        id: `note-${Date.now()}`,
        createdAt: new Date().toISOString(),
        author: 'Sistema',
        note: `Lead incorporado mediante el formulario de contacto para el área de interest: ${leadData.interes}.`
      }
    ]
  };

  leads.unshift(newLead);
  saveLeads(leads);
  return newLead;
}

export function addInteraction(leadId: string, note: string, author = 'Admin CRM'): void {
  const leads = getLeads();
  const updated = leads.map(l => {
    if (l.id === leadId) {
      const newNote: LeadInteraction = {
        id: `note-${Date.now()}`,
        createdAt: new Date().toISOString(),
        author,
        note
      };
      return {
        ...l,
        interacciones: [...l.interacciones, newNote]
      };
    }
    return l;
  });
  saveLeads(updated);
}

export function updateLeadStatus(leadId: string, status: Lead['status']): void {
  const leads = getLeads();
  const updated = leads.map(l => {
    if (l.id === leadId) {
      const newNote: LeadInteraction = {
        id: `note-${Date.now()}`,
        createdAt: new Date().toISOString(),
        author: 'Sistema',
        note: `Estado del lead actualizado de "${l.status}" a "${status}".`
      };
      return {
        ...l,
        status,
        interacciones: [...l.interacciones, newNote]
      };
    }
    return l;
  });
  saveLeads(updated);
}

export function deleteLead(leadId: string): void {
  const leads = getLeads();
  const filtered = leads.filter(l => l.id !== leadId);
  saveLeads(filtered);
}

export function clearAllLeads(): void {
  saveLeads([]);
}

export function subscribeToCrmSync(callback: () => void): () => void {
  window.addEventListener(CRM_SYNC_EVENT, callback);
  return () => window.removeEventListener(CRM_SYNC_EVENT, callback);
}
