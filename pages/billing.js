import React from "react";
import classes from "../styles/billing.module.css";
import Image from "next/image";
import imgSalary from "../images/icon.svg";
import imgPayPal from "../images/icon (1).svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faFilePdf,
  faPencilAlt,
  faTrash,
  faWifi,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import {
  faArrowAltCircleDown,
  faArrowAltCircleUp,
} from "@fortawesome/free-regular-svg-icons";
import exclamation from "../images/exlam.svg";
import imgMaster from "../images/mastercard.svg";
import visamaster from "../images/mastercard.svg";
import visadef from "../images/visa-logo.svg";
import Layout from "../containers/Layout";
const Billing = () => {
  const dataHead = [
    { date: "March,01,2020", id: "#MS-415646", price: "$180" },
    { date: "February,10,2021", id: "#RV-415646", price: "$250" },
    { date: "April,05,2020", id: "#FB-415646", price: "$560" },
    { date: "June,25,2019", id: "#QW-415646", price: "$120" },
    { date: "March,01,2019", id: "#AR-415646", price: "$300" },
  ];
  const dataFoot = [
    {
      compName: "Viking Burrito",
      email: "oliver@burrito.com",
      title: "Oliver Liam",
    },
    {
      compName: "Stone Tech Zone",
      email: "lucas@stone-tech.com",
      title: "Lucas Harper",
    },
    {
      compName: "Fiber Notion",
      email: "ethan@fiber.com",
      title: "Ethan James",
    },
  ];
  const dataSite = [
    {
      class: "webSitesPlus",
      icon: faArrowAltCircleUp,
      title: "Stripe",
      text: "26 March 2020, at 13:45 PM",
      price: "+$ 750",
    },
    {
      class: "webSitesPlus",
      icon: faArrowAltCircleUp,
      title: "HubSpot",
      text: "26 March 2020, at 12:30 PM",
      price: "+$ 1,000",
    },
    {
      class: "webSitesPlus",
      icon: faArrowAltCircleUp,
      title: "Creative Tim",
      text: "26 March 2020, at 8:30 AM",
      price: "+$ 2,500",
    },
    {
      class: "webSitesDefault",
      icon: faExclamationCircle,
      title: "Webflow",
      text: "26 March 2020, at 5:00 AM",
      price: "Pending",
    },
  ];
  return (
    <Layout>
    <div>
      <div className={classes.headPanel}>
        <div className={classes.headLeft}>
          <div className={classes.cards}>
            <div className={classes.creditCard}>
              <FontAwesomeIcon icon={faWifi} />
              <pre className={classes.cardNumber}>4562 1122 4594 7852</pre>
              <div className={classes.cardBottomInfor}>
                <div className={classes.holder}>
                  <p className={classes.cardBtText}>Card Holder</p>
                  <p>Jack Peterson</p>
                </div>
                <div className={classes.expires}>
                  <p className={classes.cardBtText}>Expires</p>
                  <p>11/22</p>
                </div>
                <Image src={imgMaster} alt='master' />
              </div>
            </div>
            <div className={classes.payPalCard}>
              <Image src={imgSalary} alt='img-card' />
              <h4>Salary</h4>
              <p>Belong Interactive</p>
              <h2>+$2000</h2>
            </div>
            <div className={classes.payPalCard}>
              <Image src={imgPayPal} alt='img-card' />
              <h4>PayPal</h4>
              <p>Freelance Payment</p>
              <h2>+$455.00</h2>
            </div>
          </div>
          <div className={classes.visaCard}>
            <div className={classes.textAndBtn}>
              <h4>Payment Method</h4>
              <button>+ ADD MEW CARD</button>
            </div>
            <div className={classes.visaes}>
              <div className={classes.visa}>
                <Image src={visamaster} alt='img' />
                <pre>**** **** ****</pre>
                <p>5248</p>
                <FontAwesomeIcon icon={faPencilAlt} />
              </div>
              <div className={classes.visa}>
                <Image src={visadef} alt='img' />
                <pre>**** **** ****</pre>
                <p>5248</p>
                <FontAwesomeIcon icon={faPencilAlt} />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.headright}>
          <div className={classes.textAndBtn}>
            <p className={classes.invoc}>Invoices</p>
            <button className={classes.view}>VIEW ALL</button>
          </div>
          {dataHead.map((item, key) => {
            return (
              <div key={key} className={classes.cardRight}>
                <div className={classes.dateCard}>
                  <h5>{item.date}</h5>
                  <p>{item.id}</p>
                </div>
                <div className={classes.pdfIcon}>
                  <p className={classes.priceCard}>{item.price}</p>
                  <FontAwesomeIcon
                    className={classes.iconPdf}
                    icon={faFilePdf}
                  />
                  <p>PDF</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={classes.footPanel}>
        <div className={classes.footLeft}>
          <p className={classes.leftTitle}>Billing Information</p>
          {dataFoot.map((item, key) => {
            return (
              <div key={key} className={classes.cardFoot}>
                <h4>{item.title}</h4>
                <div className={classes.iconsFoot}>
                  <div className={classes.trashIcon}>
                    <FontAwesomeIcon icon={faTrash} />
                    <p>DELETE</p>
                  </div>
                  <div className={classes.editIcon}>
                    <FontAwesomeIcon icon={faPencilAlt} />
                    <p>EDIT</p>
                  </div>
                </div>
                <div className={classes.footTexts}>
                  <p>
                    Company Name: <span>{item.compName}</span>
                  </p>
                  <p>
                    Email Address: <span>{item.email}</span>
                  </p>
                  <p>
                    VAT Number: <span>FRB1235476</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className={classes.footRight}>
          <div className={classes.sitesTitle}>
            <h4>Your Transactions</h4>
            <div className={classes.dataSites}>
              <FontAwesomeIcon icon={faCalendar} />
              <p>23-30 March 2020</p>
            </div>
          </div>
          <div className={classes.siteFirst}>
            <h4 className={classes.newest}>NEWEST</h4>
            <div className={classes.webSitesMinus}>
              <div className={classes.iconText}>
                <FontAwesomeIcon
                  className={classes.iconUpDown}
                  icon={faArrowAltCircleDown}
                />
                <div className={classes.siteName}>
                  <h5>Netflix</h5>
                  <p>27 March 2020,at 12:30 PM</p>
                </div>
              </div>
              <p className={classes.sitePrice}>-$ 2,500</p>
            </div>
            <div className={classes.webSitesPlus}>
              <div className={classes.iconText}>
                <FontAwesomeIcon
                  className={classes.iconUpDown}
                  icon={faArrowAltCircleUp}
                />
                <div className={classes.siteName}>
                  <h5>Apple</h5>
                  <p>27 March 2020,at 4:30 PM</p>
                </div>
              </div>
              <p className={classes.sitePrice}>-$ 2,000</p>
            </div>
            <h4 className={classes.newest}>YESTERDAY</h4>
            {dataSite.map((item, key) => {

              return(
              <div key={key} className={classes[item.class]}>
                <div className={classes.iconText}>
                  <FontAwesomeIcon
                    className={classes.iconUpDown}
                    icon={item.icon}
                  />
                  <div className={classes.siteName}>
                    <h5>{item.title}</h5>
                    <p>{item.text}</p>
                  </div>
                </div>
                <p className={classes.sitePrice}>{item.price}</p>
              </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Billing;
