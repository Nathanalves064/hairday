import { apiConfig } from "./api-config"

export async function scheduleCancel({id}) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: "DELETE",
    })

    if (!response.ok) {
      throw new Error(`DELETE falhou: ${response.status}`)
    }

    alert("Agendamento cancelado com sucesso!")
    
  } catch (error) {
    console.log(error)
    alert("Não foi possível cancelar o agendamento. Tente novamente mais tarde.")
  }
}