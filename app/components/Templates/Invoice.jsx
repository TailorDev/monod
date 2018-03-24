/* eslint one-var: 0, class-methods-use-this: 0 */
import React from 'react';
import BaseTemplate from './Base';


export default class Invoice extends BaseTemplate {

  getDefaultData() {
    return {
      reference: '[reference]',
      date: '[date]',
      amount: '[amount]',
      logo: null,
      companyAddress: {
        name: '[companyAddress/name]',
        street: '[companyAddress/street]',
        zipCode: '[companyAddress/zipcode]',
        city: '[companyAddress/city]',
        country: '[companyAddress/country]',
        businessID: '[companyAddress/businessID]',
      },
      customerAddress: {
        name: '[customerAddress/name]',
        street: '[customerAddress/street]',
        zipCode: '[customerAddress/zipcode]',
        city: '[customerAddress/city]',
        country: '[customerAddress/country]',
        businessID: '[customerAddress/businessID]',
      },
      companyBank: {
        domiciliation: '[companyBank/domiciliation]',
        iban: '[companyBank/iban]',
        bic: '[companyBank/bic]',
      },
    };
  }

  render() {
    const data = this.getData();
    const
      invoiceStyle = {
        fontSize: '12pt',
        fontFamily: 'Palatino, "Times New Roman", Times, serif',
      },
      invoiceReferenceStyle = {
        marginBottom: '0.5cm',
        fontSize: '8pt',
        textTransform: 'uppercase',
      },
      logoStyle = {
        float: 'left',
        width: '33%',
      },
      companyAddressStyle = {
        float: 'left',
        width: '33%',
        paddingLeft: '1rem',
      },
      customerAddressStyle = {
        float: 'left',
        width: '33%',
        paddingLeft: '1rem',
      },
      mainTitleStyle = {
        clear: 'left',
        width: '100%',
        paddingTop: '1cm',
        textAlign: 'center',
        fontSize: '17pt',
      },
      sectionTitleStyle = {
        width: '100%',
        borderBottom: '1px solid #ccc',
        fontSize: '16pt',
      },
      contentStyle = {
        marginTop: '1cm',
        color: '#333',
      },
      paymentStyle = {
        marginTop: '1cm',
        color: '#333',
      },
      ibanStyle = {
        backgroundColor: '#f8f8f8',
        padding: '1rem',
        borderRadius: '3px',
        border: '1px solid #ccc',
      };

    let logo = null
    if (data.logo) {
        logo = (
          <div style={logoStyle}>
            <img src="{data.logo}" alt="Logo {data.companyAddress.name}" />
          </div>
        )
    }

    return (
      <article style={invoiceStyle}>
        <header>
          <div style={invoiceReferenceStyle}>
            FACTURE N°{data.reference}
          </div>
          {logo}
          <address style={companyAddressStyle}>
            <strong>{data.companyAddress.name}</strong><br />
            {data.companyAddress.street}<br />
            {data.companyAddress.zipCode}&nbsp;
            {data.companyAddress.city}<br />
            {data.companyAddress.country}<br />
            {data.companyAddress.businessID}
          </address>
          <address style={customerAddressStyle}>
            <strong>{data.customerAddress.name}</strong><br />
            {data.customerAddress.street}<br />
            {data.customerAddress.zipCode}&nbsp;
            {data.customerAddress.city}<br />
            {data.customerAddress.country}<br />
            {data.customerAddress.businessID}
          </address>
          <h1 style={mainTitleStyle}>Facture n°{data.reference} du {data.date}</h1>
        </header>
        <section style={contentStyle}>
          <h2 style={sectionTitleStyle}>Prestation et Montant</h2>

          {this.props.content}

          <p>
            Montant : <strong>{data.amount}</strong>
          </p>
          <p>
            TVA non applicable, article 293 B du Code général des impôts.
          </p>
        </section>
        <section style={paymentStyle}>
          <h2 style={sectionTitleStyle}>Règlement</h2>
          <p>
            Le règlement est attendu à réception de la facture,
            par chèque à l&apos;ordre de {data.companyAddress.name} ou par virement
            aux coordonnées bancaires suivantes :
          </p>

          <pre style={ibanStyle}>
            Domiciliation : {data.companyBank.domiciliation}{'\n'}
            IBAN : {data.companyBank.iban}{'\n'}
            BIC : {data.companyBank.bic}
          </pre>
        </section>
      </article>
    );
  }
}
