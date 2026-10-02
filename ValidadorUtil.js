export class ValidadorUtil {

    static validarCPF(cpf) {
  if (!cpf || typeof cpf !== "string" ) return false;
  return cpf.length === 11 && !isNaN(cpf);
}
   static validarEmail(email) {
    if (!email || typeof email !== 'string') return false;
    return email.includes('@');
  }
}