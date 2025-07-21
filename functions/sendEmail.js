const nodemailer = require("nodemailer");

exports.handler = async function(event, context) {
  try {
    const data = JSON.parse(event.body);
    const { emailDestino, monto, remitente, comision, total, fecha } = data;

    const plantilla = `

  
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,width=device-width,height=device-height,target-densitydpi=device-dpi,user-scalable=no">
    <title>Ha recibido un pago</title>
    <style type="text/css">
      /**
 * SupremeLL Fonts
 */
      /* Body text - font-weight:450 */
      @font-face {
        font-family: SupremeLLTest;
        font-style: normal;
        font-weight: 450;
        src: url('https://www.paypalobjects.com/digitalassets/c/system-triggered-email/n/layout/fonts/SupremeLL/SupremeLLTestSubWeb-Book.woff2') format('woff2'),
          /*Moderner Browsers*/
          url('https://www.paypalobjects.com/digitalassets/c/system-triggered-email/n/layout/fonts/SupremeLL/SupremeLLTestSubWeb-Book.woff') format('woff');
        /* Modern Browsers */
        /* Fallback font for - MS Outlook older versions (2007,13, 16)*/
        mso-font-alt: 'Calibri';
      }

      /* Subheadline font-weight:500 */
      @font-face {
        font-family: SupremeLLTest;
        font-style: normal;
        font-weight: 500;
        src: url('https://www.paypalobjects.com/digitalassets/c/system-triggered-email/n/layout/fonts/SupremeLL/SupremeLLTestSubWeb-Medium.woff2') format('woff2'),
          /*Moderner Browsers*/
          url('https://www.paypalobjects.com/digitalassets/c/system-triggered-email/n/layout/fonts/SupremeLL/SupremeLLTestSubWeb-Medium.woff') format('woff');
        /* Modern Browsers */
        /* Fallback font for - MS Outlook older versions (2007,13, 16)*/
        mso-font-alt: 'Calibri';
      }

      /* Button font-weight:700 */
      @font-face {
        font-family: SupremeLLTest;
        font-style: normal;
        font-weight: 700;
        src: url('https://www.paypalobjects.com/digitalassets/c/system-triggered-email/n/layout/fonts/SupremeLL/SupremeLLTestSubWeb-Bold.woff2') format('woff2'),
          /*Moderner Browsers*/
          url('https://www.paypalobjects.com/digitalassets/c/system-triggered-email/n/layout/fonts/SupremeLL/SupremeLLTestSubWeb-Bold.woff') format('woff');
        /* Modern Browsers */
        /* Fallback font for - MS Outlook older versions (2007,13, 16)*/
        mso-font-alt: 'Calibri';
      }

      /* Headline font-weight:900 */
      @font-face {
        font-family: SupremeLLTest;
        font-style: normal;
        font-weight: 900;
        src: url('https://www.paypalobjects.com/digitalassets/c/system-triggered-email/n/layout/fonts/SupremeLL/SupremeLLTestSubWeb-Black.woff2') format('woff2'),
          /*Moderner Browsers*/
          url('https://www.paypalobjects.com/digitalassets/c/system-triggered-email/n/layout/fonts/SupremeLL/SupremeLLTestSubWeb-Black.woff') format('woff');
        /* Modern Browsers */
        /* Fallback font for - MS Outlook older versions (2007,13, 16)*/
        mso-font-alt: 'Calibri';
      }

      /* End - SupremeLL Fonts */

      /**
   * Import only the styles required for Email templates.
   */
      @charset "UTF-8";

      html {
        box-sizing: border-box;
        background: #F5F7FA;
        color: #000000;
        font-size: 14px;
        line-height: 1.4286;
        height: 100%;
      }

      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }

      body {
        font-size: 14px !important;
        font-weight: 450;
        line-height: 1.4286;
        font-family: SupremeLLTest, 'Avant Garde', Helvetica, Arial;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-smoothing: antialiased;
        background: #F5F7FA;
        color: #000000;
        height: 100%;
        margin: 0;
        padding: 0;
      }

      a,
      a:visited {
        color: #0074DE;
        text-decoration: none;
        font-weight: 700;
        font-family: SupremeLLTest, 'Avant Garde', Helvetica, Arial;
        ;
      }

      a:active,
      a:focus,
      a:hover {
        color: #003087;
        text-decoration: underline;
      }

      p,
      li,
      dd,
      dt,
      label,
      input,
      textarea,
      pre,
      code,
      table {
        font-size: 14px;
        line-height: 1.4286;
        font-weight: 450;
        text-transform: none;
        font-family: SupremeLLTest, 'Avant Garde', Helvetica, Arial;
        ;
        color: #000000;
      }

      /* prevent iOS font upsizing */
      * {
        -webkit-text-size-adjust: none;
      }

      /* force Outlook.com to honor line-height */
      .ExternalClass * {
        line-height: 100%;
      }

      td {
        mso-line-height-rule: exactly;
      }

      div[style*="margin: 16px 0"] {
        margin: 0 !important;
      }

      .ppsans {
        font-family: SupremeLLTest, 'Avant Garde', Helvetica, Arial !important;
      }
    </style>
  

  
    <h4 id="preHeader" style="display:none;color:#F5F7FA;font-size:0px;line-height:0px">{{nombre}}, recibió&nbsp; {{monto}}&nbsp;USD</h4>
    <table cellpadding="0" cellspacing="0" border="0" width="100%" role="presentation">
      <tbody>
        <tr>
          <td bgcolor="#F5F7FA" style="font-size:0px"></td>
          <td bgcolor="#F5F7FA" width="640" align="center" class="mobContent">
            <table cellpadding="0" cellspacing="0" border="0" width="100%" dir="ltr" role="presentation">
              <tbody>
                <tr>
                  <td>
                    <table cellpadding="0" cellspacing="0" border="0" width="100%" role="presentation">
                      <tbody>
                        <tr>
                          <td>
                            <table width="100%" cellpadding="0" cellspacing="0" border="0" dir="ltr" style="background:#fff" role="presentation">
                              <tbody>
                                <tr>
                                  <td align="center" style="line-height: 9px; padding: 10px 0px;"><font color="#929496"><span style="font-size: 12px;">Hola, {{remitente}}:</span></font></td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <table width="100%" cellpadding="0" cellspacing="0" border="0" dir="ltr" role="presentation">
                              <tbody>
                                <tr>
                                  <td align="center" style="padding:24px 24px 40px 24px"><img src="https://www.paypalobjects.com/digitalassets/c/system-triggered-email/n/layout/images/ppe/pp-logo_x2.png" style="display: block; touch-action: none;" border="0" width="51" height="51" alt="PayPal" title="PayPal" class=""></td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table cellpadding="0" cellspacing="0" border="0" width="100%" class="ppsans" dir="ltr" role="presentation">
              <tbody>
                <tr>
                  <td width="640" valign="top">
                    <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
                      <tbody>
                        <tr>
                          <td align="center" style="padding:0px 24px 40px 24px;word-break:break-word">
                            <p class="ppsans" style="font-size:42px;font-weight:900;line-height:46px;color:#000;margin:0"><span>{{remitente}} le ha enviado {{monto}}&nbsp;USD</span></p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
                      <tbody>
                        <tr>
                          <td style="padding:0px 24px 24px 24px">
                            <table width="100%" cellspacing="0" cellpadding="0" border="0">
                              <tbody>
                                <tr>
                                  <td valign="top">
                                    <p style="font-size:20px;line-height:28px;color:#000000;margin:0" dir="ltr"><span>Detalles de la transacción</span></p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table width="100%" cellspacing="0" cellpadding="0" border="0">
                      <tbody>
                        <tr>
                          <td style="padding:0px 14px 14px 14px">
                            <table id="cartDetails" cellspacing="0" cellpadding="0" border="0" width="100%" dir="ltr" style="font-size:14px">
                              <tbody>
                                <tr>
                                  <td style="padding:10px 10px;text-align:left;border-top:0px;width:50%;vertical-align:top"><span><strong>Id. de transacción</strong></span><br><a href="https://py.pl/1rufo9?v=1%2C1&amp;utm_source=unp%2Cunp&amp;utm_medium=email%2Cemail&amp;utm_campaign=RT000397%2CRT000397&amp;utm_unptid=3b486d9b-d2c4-11ef-bd75-3779a3de5abf%2C3b486d9b-d2c4-11ef-bd75-3779a3de5abf&amp;ppid=RT000397%2CRT000397&amp;cnac=DO%2CDO&amp;rsta=es_XC%28es-DO%29%2Ces_XC%28es-DO%29&amp;cust=NUGW9C45FH36N%2CNUGW9C45FH36N&amp;unptid=3b486d9b-d2c4-11ef-bd75-3779a3de5abf%2C3b486d9b-d2c4-11ef-bd75-3779a3de5abf&amp;calc=96de548650ee2%2C96de548650ee2&amp;unp_tpcid=sendmoney-businessapp-push-receiver%2Csendmoney-businessapp-push-receiver&amp;page=main%3Aemail%3ART000397%2Cmain%3Aemail%3ART000397&amp;pgrp=main%3Aemail%2Cmain%3Aemail&amp;e=cl%2Ccl&amp;mchn=em%2Cem&amp;s=ci%2Cci&amp;mail=sys%2Csys&amp;appVersion=1.299.0%2C1.299.0&amp;tenant_name=undefined%2CPAYPAL&amp;xt=145585%2C154413%2C104038%2C145585%2C154413%2C104038&amp;link_ref=py.pl_1rufo9" target="_blank"><span>0NE9106461288715H</span></a></td>
                                  <td style="padding:10px 10px;text-align:right;border-top:0px;width:50%;vertical-align:top"><span><strong>Fecha de la transacción</strong></span><br>{{fecha}}</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tbody>
                        <tr>
                          <td style="padding:10px 20px">
                            <hr style="border-top:1px solid #C6C6C6">
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table width="100%" cellspacing="0" cellpadding="0" border="0">
                      <tbody>
                        <tr>
                          <td style="padding:0px 14px 14px 14px">
                            <table id="cartDetails" cellspacing="0" cellpadding="0" border="0" width="100%" dir="ltr" style="font-size:14px;padding:0px 10px">
                              <tbody>
                                <tr>
                                  <td><strong>Importe recibido</strong></td>
                                  <td align="right">{{monto}}&nbsp;USD</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tbody>
                        <tr>
                          <td style="padding:10px 20px">
                            <hr style="border-top:1px solid #C6C6C6">
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table width="100%" cellspacing="0" cellpadding="0" border="0">
                      <tbody>
                        <tr>
                          <td style="padding:0px 14px 14px 14px">
                            <table id="cartDetails" cellspacing="0" cellpadding="0" border="0" width="100%" dir="ltr" style="font-size:14px;padding:0px 10px">
                              <tbody>
                                <tr>
                                  <td><strong>Comisión</strong></td>
                                  <td align="right">{{comision}}&nbsp;USD</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table width="100%" cellspacing="0" cellpadding="0" border="0">
                      <tbody>
                        <tr>
                          <td style="padding:0px 14px 14px 14px">
                            <table id="cartDetails" cellspacing="0" cellpadding="0" border="0" width="100%" dir="ltr" style="font-size:14px;padding:0px 10px">
                              <tbody>
                                <tr>
                                  <td><strong>Total</strong></td>
                                  <td align="right">{{total}}&nbsp;USD</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tbody>
                        <tr>
                          <td style="padding:10px">
                            <hr style="border-top:1px dotted #C6C6C6">
                          </td>
                        </tr>
                      </tbody>
                    </table><br><table width="100%" cellpadding="0" cellspacing="0" border="0"><tbody>
                      </tbody>
                    </table>
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tbody>
                        <tr>
                          <td class="ppsans" style="padding:0px 24px 24px 24px">
                            <p class="ppsans" style="font-size:14px;line-height:20px;color:#000000;margin:0;word-break:break-word" dir="ltr"><span>¿No ve los fondos en su cuenta?<br> No se preocupe, a veces tarda unos minutos en aparecer.</span></p>
                          </td>
                        </tr>
                      </tbody>
                    </table><br><br>
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tbody>
                        <tr>
                          <td style="padding:10px">
                            <hr style="border-top:1px solid #C6C6C6">
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td width="640">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" dir="ltr">
                      <tbody>
                        <tr>
                          <td>
                            <table width="100%" cellpadding="0" cellspacing="0" border="0">
                              <tbody>
                                <tr>
                                  <td align="center" valign="top" style="padding:30px 24px 30px 24px"><img src="https://www.paypalobjects.com/digitalassets/c/system-triggered-email/n/layout/images/ppe/pp-logo_x2.png" width="40" height="40" style="display: block; touch-action: none;" border="0" alt="PayPal" class="">
                                    <hr class="footerDivider" style="border-top:1px solid #C6C6C6;margin:30px 0px 0px 0px">
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table id="body_footer_links" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:0px" dir="ltr">
                      <tbody>
                        <tr>
                          <td align="center" style="font-size:12px;line-height:16px;padding:10px 24px 23px 24px;color:#001435;font-weight:400" class="ppsans"><a href="https://www.paypal.com/do/smarthelp/home?v=1&amp;utm_source=unp&amp;utm_medium=email&amp;utm_campaign=RT000397&amp;utm_unptid=3b486d9b-d2c4-11ef-bd75-3779a3de5abf&amp;ppid=RT000397&amp;cnac=DO&amp;rsta=es_XC%28es-DO%29&amp;cust=NUGW9C45FH36N&amp;unptid=3b486d9b-d2c4-11ef-bd75-3779a3de5abf&amp;calc=96de548650ee2&amp;unp_tpcid=sendmoney-businessapp-push-receiver&amp;page=main%3Aemail%3ART000397&amp;pgrp=main%3Aemail&amp;e=cl&amp;mchn=em&amp;s=ci&amp;mail=sys&amp;appVersion=1.299.0&amp;tenant_name=PAYPAL&amp;xt=145585%2C154413%2C104038&amp;link_ref=smarthelp_home" target="_blank" class="ppsans" style="color:#0074DE;text-decoration:none" alt="Help &amp; Contact">Contacto y ayuda</a><span style="padding:0px 5px"> | </span><a href="https://www.paypal.com/do/webapps/mpp/paypal-safety-and-security?v=1&amp;utm_source=unp&amp;utm_medium=email&amp;utm_campaign=RT000397&amp;utm_unptid=3b486d9b-d2c4-11ef-bd75-3779a3de5abf&amp;ppid=RT000397&amp;cnac=DO&amp;rsta=es_XC%28es-DO%29&amp;cust=NUGW9C45FH36N&amp;unptid=3b486d9b-d2c4-11ef-bd75-3779a3de5abf&amp;calc=96de548650ee2&amp;unp_tpcid=sendmoney-businessapp-push-receiver&amp;page=main%3Aemail%3ART000397&amp;pgrp=main%3Aemail&amp;e=cl&amp;mchn=em&amp;s=ci&amp;mail=sys&amp;appVersion=1.299.0&amp;tenant_name=PAYPAL&amp;xt=145585%2C154413%2C104038&amp;link_ref=mpp_paypal-safety-and-security" target="_blank" class="ppsans" style="color:#0074DE;text-decoration:none" alt="Security">Seguridad</a><span style="padding:0px 5px"> | </span><a href="https://www.paypal.com/do/webapps/mpp/mobile-apps?v=1&amp;utm_source=unp&amp;utm_medium=email&amp;utm_campaign=RT000397&amp;utm_unptid=3b486d9b-d2c4-11ef-bd75-3779a3de5abf&amp;ppid=RT000397&amp;cnac=DO&amp;rsta=es_XC%28es-DO%29&amp;cust=NUGW9C45FH36N&amp;unptid=3b486d9b-d2c4-11ef-bd75-3779a3de5abf&amp;calc=96de548650ee2&amp;unp_tpcid=sendmoney-businessapp-push-receiver&amp;page=main%3Aemail%3ART000397&amp;pgrp=main%3Aemail&amp;e=cl&amp;mchn=em&amp;s=ci&amp;mail=sys&amp;appVersion=1.299.0&amp;tenant_name=PAYPAL&amp;xt=145585%2C154413%2C104038&amp;link_ref=mpp_mobile-apps" target="_blank" class="ppsans" style="color:#0074DE;text-decoration:none" alt="Apps">Aplicaciones</a></td>
                        </tr>
                        <tr>
                          <td align="center" style="padding-bottom:10px;padding-top:0px;padding-left:11px;padding-right:20px">
                            <table cellpadding="0" cellspacing="0" border="0" dir="ltr">
                              <tbody>
                                <tr>
                                  <td align="center" valign="middle" width="55"><a id="twitter" href="https://twitter.com/PayPal?v=1%2C0.1&amp;utm_source=unp&amp;utm_medium=email&amp;utm_campaign=RT000397&amp;utm_unptid=3b486d9b-d2c4-11ef-bd75-3779a3de5abf&amp;ppid=RT000397&amp;cnac=DO&amp;rsta=es_XC%28es-DO%29&amp;cust=NUGW9C45FH36N&amp;unptid=3b486d9b-d2c4-11ef-bd75-3779a3de5abf&amp;calc=96de548650ee2&amp;unp_tpcid=sendmoney-businessapp-push-receiver&amp;page=main%3Aemail%3ART000397&amp;pgrp=main%3Aemail&amp;e=cl&amp;mchn=em&amp;s=ci&amp;mail=sys&amp;appVersion=1.299.0&amp;tenant_name=PAYPAL&amp;xt=145585%2C154413%2C104038&amp;link_ref=twitter.com_paypal" target="_blank"><img border="0" src="https://www.paypalobjects.com/digitalassets/c/system-triggered-email/n/layout/images/quantum_leap/footer-social-icons_x.png" width="32" height="32" style="display: block; touch-action: none;" alt="Twitter" class=""></a></td>
                                  <td align="center" valign="middle" width="55"><a id="instagram" href="https://www.instagram.com/paypal/?v=1%2C0.1&amp;utm_source=unp&amp;utm_medium=email&amp;utm_campaign=RT000397&amp;utm_unptid=3b486d9b-d2c4-11ef-bd75-3779a3de5abf&amp;ppid=RT000397&amp;cnac=DO&amp;rsta=es_XC%28es-DO%29&amp;cust=NUGW9C45FH36N&amp;unptid=3b486d9b-d2c4-11ef-bd75-3779a3de5abf&amp;calc=96de548650ee2&amp;unp_tpcid=sendmoney-businessapp-push-receiver&amp;page=main%3Aemail%3ART000397&amp;pgrp=main%3Aemail&amp;e=cl&amp;mchn=em&amp;s=ci&amp;mail=sys&amp;appVersion=1.299.0&amp;tenant_name=PAYPAL&amp;xt=145585%2C154413%2C104038&amp;link_ref=www.instagram.com_paypal" target="_blank"><img border="0" src="https://paypalobjects.com/digitalassets/c/system-triggered-email/n/layout/images/quantum_leap/footer-social-icons_instagram.png" width="32" height="32" style="display: block; touch-action: none;" alt="Instagram" class=""></a></td>
                                  <td align="center" valign="middle" width="55"><a id="facebook" href="https://www.facebook.com/PayPalUSA?v=1%2C0.1&amp;utm_source=unp&amp;utm_medium=email&amp;utm_campaign=RT000397&amp;utm_unptid=3b486d9b-d2c4-11ef-bd75-3779a3de5abf&amp;ppid=RT000397&amp;cnac=DO&amp;rsta=es_XC%28es-DO%29&amp;cust=NUGW9C45FH36N&amp;unptid=3b486d9b-d2c4-11ef-bd75-3779a3de5abf&amp;calc=96de548650ee2&amp;unp_tpcid=sendmoney-businessapp-push-receiver&amp;page=main%3Aemail%3ART000397&amp;pgrp=main%3Aemail&amp;e=cl&amp;mchn=em&amp;s=ci&amp;mail=sys&amp;appVersion=1.299.0&amp;tenant_name=PAYPAL&amp;xt=145585%2C154413%2C104038&amp;link_ref=www.facebook.com_paypalusa" target="_blank"><img border="0" src="https://paypalobjects.com/digitalassets/c/system-triggered-email/n/layout/images/quantum_leap/footer-social-icons_facebook.png" width="32" height="32" style="display: block; touch-action: none;" alt="Facebook" class=""></a></td>
                                  <td align="center" valign="middle" width="55"><a id="linkedin" href="http://www.linkedin.com/company/1482?trk=tyah&amp;v=1&amp;utm_source=unp&amp;utm_medium=email&amp;utm_campaign=RT000397&amp;utm_unptid=3b486d9b-d2c4-11ef-bd75-3779a3de5abf&amp;ppid=RT000397&amp;cnac=DO&amp;rsta=es_XC%28es-DO%29&amp;cust=NUGW9C45FH36N&amp;unptid=3b486d9b-d2c4-11ef-bd75-3779a3de5abf&amp;calc=96de548650ee2&amp;unp_tpcid=sendmoney-businessapp-push-receiver&amp;page=main%3Aemail%3ART000397&amp;pgrp=main%3Aemail&amp;e=cl&amp;mchn=em&amp;s=ci&amp;mail=sys&amp;appVersion=1.299.0&amp;tenant_name=PAYPAL&amp;xt=145585%2C154413%2C104038&amp;link_ref=company_1482" target="_blank"><img border="0" src="https://paypalobjects.com/digitalassets/c/system-triggered-email/n/layout/images/quantum_leap/footer-social-icons_linkedin.png" width="32" height="32" style="display: block; touch-action: none;" alt="LinkedIn" class=""></a></td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table cellpadding="0" cellspacing="0" border="0" width="100%" style="padding:5px 24px 20px 24px">
              <tbody>
                <tr>
                  <td class="ppsans" width="600">
                    <table id="hideForTextFooter" width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tbody>
                        <tr>
                          <td style="font-size:12px;line-height:16px;padding:6px 0px">
                            <p class="ppsans" style="font-size:12px;margin:0" dir="ltr"><span>PayPal tiene el compromiso de prevenir los correos electrónicos fraudulentos. Los correos electrónicos de PayPal siempre contienen su nombre completo. <a href="https://www.paypal.com/us/webapps/mpp/security/suspicious-activity?v=1&amp;utm_source=unp&amp;utm_medium=email&amp;utm_campaign=RT000397&amp;utm_unptid=3b486d9b-d2c4-11ef-bd75-3779a3de5abf&amp;ppid=RT000397&amp;cnac=DO&amp;rsta=es_XC%28es-DO%29&amp;cust=NUGW9C45FH36N&amp;unptid=3b486d9b-d2c4-11ef-bd75-3779a3de5abf&amp;calc=96de548650ee2&amp;unp_tpcid=sendmoney-businessapp-push-receiver&amp;page=main%3Aemail%3ART000397&amp;pgrp=main%3Aemail&amp;e=cl&amp;mchn=em&amp;s=ci&amp;mail=sys&amp;appVersion=1.299.0&amp;tenant_name=PAYPAL&amp;xt=145585%2C154413%2C104038&amp;link_ref=security_suspicious-activity" target="_blank" style="text-decoration:none">Más información sobre cómo identificar el phishing.</a></span></p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table id="hideForTextFooter" width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tbody>
                        <tr>
                          <td style="font-size:12px;line-height:16px;padding:6px 0px">
                            <p class="ppsans" style="font-size:12px;margin:0" dir="ltr"><span>No responda a este correo electrónico. Para ponerse en contacto con nosotros, haga clic en <a href="https://www.paypal.com/selfhelp/home?v=1&amp;utm_source=unp&amp;utm_medium=email&amp;utm_campaign=RT000397&amp;utm_unptid=3b486d9b-d2c4-11ef-bd75-3779a3de5abf&amp;ppid=RT000397&amp;cnac=DO&amp;rsta=es_XC%28es-DO%29&amp;cust=NUGW9C45FH36N&amp;unptid=3b486d9b-d2c4-11ef-bd75-3779a3de5abf&amp;calc=96de548650ee2&amp;unp_tpcid=sendmoney-businessapp-push-receiver&amp;page=main%3Aemail%3ART000397&amp;pgrp=main%3Aemail&amp;e=cl&amp;mchn=em&amp;s=ci&amp;mail=sys&amp;appVersion=1.299.0&amp;tenant_name=PAYPAL&amp;xt=145585%2C154413%2C104038&amp;link_ref=selfhelp_home" target="_blank" style="text-decoration:none">Contacto y ayuda</a>.</span></p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table id="" width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tbody>
                        <tr>
                          <td style="font-size:12px;line-height:16px;padding:6px 0px">
                            <p class="ppsans" style="font-size:12px;margin:0" dir="ltr"><span>¿No está seguro de por qué recibió este correo electrónico? <a href="https://www.paypal.com/do/smarthelp/article/why-am-i-receiving-emails-from-paypal-when-i-dont-have-an-account-faq4172?v=1&amp;utm_source=unp&amp;utm_medium=email&amp;utm_campaign=RT000397&amp;utm_unptid=3b486d9b-d2c4-11ef-bd75-3779a3de5abf&amp;ppid=RT000397&amp;cnac=DO&amp;rsta=es_XC%28es-DO%29&amp;cust=NUGW9C45FH36N&amp;unptid=3b486d9b-d2c4-11ef-bd75-3779a3de5abf&amp;calc=96de548650ee2&amp;unp_tpcid=sendmoney-businessapp-push-receiver&amp;page=main%3Aemail%3ART000397&amp;pgrp=main%3Aemail&amp;e=cl&amp;mchn=em&amp;s=ci&amp;mail=sys&amp;appVersion=1.299.0&amp;tenant_name=PAYPAL&amp;xt=145585%2C154413%2C104038&amp;link_ref=article_why-am-i-receiving-emails-from-paypal-when-i-dont-have-an-account-faq4172" target="_blank" style="text-decoration:none">Obtener más información</a></span></p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tbody>
                        <tr>
                          <td style="font-size:12px;line-height:16px;padding:6px 0px">
                            <p class="ppsans" style="font-size:12px;margin:0" dir="ltr">
                            </p><p style="font-size:12px" dir="ltr"><span>Copyright © 1999-2025 PayPal. Todos los derechos reservados.<br><br>PayPal Pte. Ltd. tiene licencia otorgada por la Autoridad Monetaria de Singapur como Institución de Pago Principal en virtud de la Ley de Servicios de Pago de 2019.</span></p>
                            <p style="font-size:12px" dir="ltr">PayPal RT000397:es_XC(es-DO):1.8.1:96de548650ee2</p><img alt="" height="1" width="1" border="0" src="https://t.paypal.com/ts?v=1&amp;utm_source=unp&amp;utm_medium=email&amp;utm_campaign=RT000397&amp;utm_unptid=3b486d9b-d2c4-11ef-bd75-3779a3de5abf&amp;ppid=RT000397&amp;cnac=DO&amp;rsta=es_XC%28es-DO%29&amp;cust=NUGW9C45FH36N&amp;unptid=3b486d9b-d2c4-11ef-bd75-3779a3de5abf&amp;calc=96de548650ee2&amp;unp_tpcid=sendmoney-businessapp-push-receiver&amp;page=main%3Aemail%3ART000397&amp;pgrp=main%3Aemail&amp;e=op&amp;mchn=em&amp;s=ci&amp;mail=sys&amp;appVersion=1.299.0&amp;tenant_name=PAYPAL&amp;xt=145585%2C154413%2C104038&amp;link_ref=t.paypal.com_ts" class="" style="touch-action: none;">
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
          <td bgcolor="#F5F7FA" style="font-size:0px"></td>
        </tr>
      </tbody>
    </table><p>{{fecha}}
  


</p>`;

    const contenidoHTML = plantilla
      .replace(/{{nombre}}/g, emailDestino)
      .replace(/{{monto}}/g, monto)
      .replace(/{{remitente}}/g, remitente)
      .replace(/{{comision}}/g, comision)
      .replace(/{{total}}/g, total)
      .replace(/{{fecha}}/g, fecha);

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "jazzysell123@gmail.com",
        pass: "dfbcartjozqoeudc"
      }
    });

    await transporter.sendMail({
      from: `"Service" <jazzysell123@gmail.com>`,
      to: emailDestino,
      subject: "Has recibido un pago",
      html: contenidoHTML
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Correo enviado exitosamente." })
    };
  } catch (error) {
    console.error("Error al enviar correo:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error al enviar el correo." })
    };
  }
};
