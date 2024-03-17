export interface ApiSchema {
  url: string
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  body?: BodyInit | null
  headers?: HeadersInit
}


export interface ContentViewProps {
  panel: string;
  panels: string[];
}

export interface PanelListProps extends ContentViewProps {
  setPanel: (panel: string) => void;
}

export interface CatFactResponse {
  fact: string;
}