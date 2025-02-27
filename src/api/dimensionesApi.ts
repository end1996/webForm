import apiClient from "./apiClient";

export interface Dimension {
    id?: number;
    alto: number;
    largo: number;
    tipo_medida?: boolean;
    precio?: number;
}
export const fetchDimensiones = async (): Promise<Dimension[]> => {
    const {data} = await apiClient.get<Dimension[]>("./dimensiones");
    return data;
}
