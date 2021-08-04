const request = require('request');
const { parseString } = require('xml2js');
const { DOMParser } = require('xmldom');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
class CrfController {
  async store(req, res) {
    // if (req.body.chave === 'WBMXKJ1S') {
      console.log(
        `Médico: ${req.body.crm} pesquisada por: Nilson Silva
        `
      );
      const url =
        'https://ws.cfm.org.br:8080/WebServiceConsultaMedicos/ServicoConsultaMedicos';

      const form = `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
        xmlns:ser="http://servico.cfm.org.br/">
          <soapenv:Header/>
            <soapenv:Body>
            <ser:Consultar>
            <crm>${req.body.crm}</crm>
            <uf>${req.body.uf}</uf>
            <chave>${process.env.CRM_KEY}</chave>
            </ser:Consultar>
          </soapenv:Body>
      </soapenv:Envelope> `;

     await request.post(
        {
          url,
          form,
          headers: {
            'Content-Type': 'text/xml;charset=UTF-8',
          },
        },
        function(error, response, body) {
          console.log('AQUI', body)
          if (error !== null) {
            console.log(error);
            res.json({ message: 'Não foi possivel encontrar o médico!' });
          } else {
            const doc = new DOMParser().parseFromString(body, 'text/xml');
            const extract01 = doc.getElementsByTagName('soap:Envelope')[0];
            const extract02 = extract01.getElementsByTagName('soap:Body')[0];
            const extract03 = extract02.getElementsByTagName(
              'ns2:ConsultarResponse'
            )[0];
            
            if (extract03 === undefined) {
              res.json({ message: 'Não foi possivel encontrar o médico!' });
            } else {
              const extract04 = extract03.getElementsByTagName('dadosMedico')[0];
              let json = '';
              parseString(extract04, function(err, result) {
                json = result;
              });
              res.json(json);
            }
          }
        }
      );
  }
}

export default new CrfController();