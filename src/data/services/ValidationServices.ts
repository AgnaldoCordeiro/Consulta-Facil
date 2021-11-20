export const ValidationService = {
  cpf(cpf = ""): boolean {
    return cpf.replace(/\D/g, "").length === 11;
  },
  cnpj(cnpj = ""): boolean {
    return cnpj.replace(/\D/g, "").length === 14;
  },
};
