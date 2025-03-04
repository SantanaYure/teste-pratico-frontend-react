/**
 * Formata uma data no formato DD/MM/YYYY
 * @param dateString - Data no formato ISO ou outra string de data válida
 * @returns Data formatada
 */
export function formatDate(dateString: string): string {
    if (!dateString) return '';
    
    try {
      const date = new Date(dateString);
      
      // Verificar se a data é válida
      if (isNaN(date.getTime())) {
        return dateString; // Retorna a string original se não for uma data válida
      }
      
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear();
      
      return `${day}/${month}/${year}`;
    } catch (error) {
      console.error('Erro ao formatar data:', error);
      return dateString;
    }
  }
  
  /**
   * Formata um número de telefone no padrão +XX (XX) XXXXX-XXXX
   * @param phoneNumber - Número de telefone
   * @returns Telefone formatado
   */
  export function formatPhone(phoneNumber: string): string {
    if (!phoneNumber) return '';
    
    try {
      // Remove todos os caracteres não numéricos
      const cleanNumber = phoneNumber.replace(/\D/g, '');
      
      // Se o número tiver menos de 10 dígitos, retorna o original
      if (cleanNumber.length < 10) {
        return phoneNumber;
      }
      
      // Formato padrão brasileiro com código de país +55
      if (cleanNumber.length === 11) { // Com 9º dígito
        return `+55 (${cleanNumber.substring(0, 2)}) ${cleanNumber.substring(2, 7)}-${cleanNumber.substring(7)}`;
      } else if (cleanNumber.length === 10) { // Sem 9º dígito
        return `+55 (${cleanNumber.substring(0, 2)}) ${cleanNumber.substring(2, 6)}-${cleanNumber.substring(6)}`;
      } else if (cleanNumber.length > 11) { // Número internacional
        // Assumindo que os primeiros 2 dígitos são o código do país
        const countryCode = cleanNumber.substring(0, 2);
        const areaCode = cleanNumber.substring(2, 4);
        const firstPart = cleanNumber.substring(4, 9);
        const lastPart = cleanNumber.substring(9);
        
        return `+${countryCode} (${areaCode}) ${firstPart}-${lastPart}`;
      }
      
      // Fallback para outros formatos
      return phoneNumber;
    } catch (error) {
      console.error('Erro ao formatar telefone:', error);
      return phoneNumber;
    }
  }