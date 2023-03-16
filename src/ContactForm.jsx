import { Button, Form } from "react-bootstrap";
import { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
//site css imports below
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

export default function ContactForm() {
  const imgSlider = [
    "./images/contact-page/static1.jpg",
    "./images/contact-page/static2.jpg",
    "./images/contact-page/static3.jpg",
    "./images/contact-page/static4.jpg",
    "./images/contact-page/static5.jpg",
  ];
  return (
    <div id="contact" className="formContainer">
      <Form
        action="https://crm.zoho.com/crm/WebForm"
        name="WebForm1783950000105979042"
        method="POST"
        id="crmWebToEntityForm"
        className="zcwf_lblLeft crmWebToEntityForm"
      >
        <input
          type="text"
          style={{ display: "none" }}
          name="xnQsjsdp"
          value="4db42541326d55016ac8b720a02a9d9e6c126b8584e6573fdd74efcb89f229ed"
          readOnly
        ></input>
        <input type="hidden" name="zc_gad" id="zc_gad" value=""></input>
        <input
          type="text"
          style={{ display: "none" }}
          name="xmIwtLD"
          value="bdf616f942dbf09d525ab87f94005707c9845f7b905b5d7ca9f19aa700272819"
          readOnly
        ></input>
        <input
          type="text"
          style={{ display: "none" }}
          name="actionType"
          value="Q3VzdG9tTW9kdWxlMw=="
          readOnly
        ></input>
        <input
          type="text"
          style={{ display: "none" }}
          name="returnURL"
          value="https&#x3a;&#x2f;&#x2f;emaxinteractive.com&#x2f;thankyou"
          readOnly
        ></input>
        <h3 className="zcwf_title formTitleContainer">Contact Form</h3>
        <Form.Group className="mb-3 zcwf_row" controlId="NAME">
          <Form.Label className="zcwf_col_lab">
            First Name <span className="require">*</span>
          </Form.Label>
          <Form.Control
            type="text"
            className="zcwf_col_fld"
            name="NAME"
            maxLength={120}
            required
          />
          <div className="zcwf_col_help"></div>
        </Form.Group>
        <Form.Group className="mb-3 zcwf_row" controlId="COBJ3CF4">
          <Form.Label className="zcwf_col_lab">
            Last Name <span className="require">*</span>
          </Form.Label>
          <Form.Control
            type="text"
            className="zcwf_col_fld"
            name="COBJ3CF4"
            maxLength={250}
            required
          />
          <div className="zcwf_col_help"></div>
        </Form.Group>
        <Form.Group className="mb-3 zcwf_row" controlId="COBJ3CF3">
          <Form.Label className="zcwf_col_lab">Company</Form.Label>
          <Form.Control
            type="text"
            className="zcwf_col_fld"
            name="COBJ3CF3"
            maxLength={250}
          />
          <div className="zcwf_col_help"></div>
        </Form.Group>
        <Form.Group className="mb-3 zcwf_row" controlId="Email">
          <Form.Label className="zcwf_col_lab">
            Email <span className="require">*</span>
          </Form.Label>
          <Form.Control
            type="email"
            ftype="email"
            name="Email"
            className="zcwf_col_fld"
            maxLength={100}
            required
          />
          <div className="zcwf_col_help"></div>
        </Form.Group>
        <Form.Group className="mb-3 zcwf_row" controlId="COBJ3CF2">
          <Form.Label className="zcwf_col_lab">Phone</Form.Label>
          <Form.Control
            type="tel"
            className="zcwf_col_fld"
            name="COBJ3CF2"
            maxLength={250}
          />
          <div className="zcwf_col_help"></div>
        </Form.Group>
        <Form.Group className="mb-3 zcwf_row" controlId="COBJ3CF1">
          <Form.Label className="zcwf_col_lab">Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            className="zcwf_col_fld"
            height={"30px"}
            name="COBJ3CF1"
          />
          <div className="zcwf_col_help"></div>
        </Form.Group>
        <Form.Group
          className="mb-3 zcwf_row wfrm_fld_dpNn"
          controlId="COBJ3CF9"
          style={{ display: "none" }}
        >
          <Form.Label className="zcwf_col_lab">Lead Source</Form.Label>
          <Form.Select
            className="zcwf_col_fld_slt"
            height={"30px"}
            name="COBJ3CF9"
            defaultValue={"MikeyMikeEvents&#x20;Contact&#x20;Us&#x20;Form"}
          >
            <option value="MikeyMikeEvents&#x20;Contact&#x20;Us&#x20;Form">
              MikeyMikeEvents Contact Us Form
            </option>
          </Form.Select>
          <div className="zcwf_col_help"></div>
        </Form.Group>
        <Form.Group
          className="mb-3 zcwf_row wfrm_fld_dpNn"
          controlId="COBJ3CF8"
          style={{ display: "none" }}
        >
          <Form.Label className="zcwf_col_lab">Referred From</Form.Label>
          <Form.Control
            type="text"
            className="zcwf_col_fld"
            name="COBJ3CF8"
            maxLength={250}
            value="Mikey&#x20;Mike&#x20;Events&#x20;Splash"
            readOnly
          />
          <div className="zcwf_col_help"></div>
        </Form.Group>

        <Button
          type="submit"
          id="formsubmit"
          className="formsubmit zcwf_button"
          title="Submit"
        >
          SUBMIT
        </Button>
      </Form>
      <div className="contactInfo">
        <h3>Contacts</h3>
        <div className="xsmallText smallBold address">
          CORPORATE HEADQUARTERS <br />
          140 Florida Street <br />
          Farmingdale NY <br />
          (877) 885-0705
        </div>

        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={true}
          speed={3000}
          spaceBetween={50}
          slidesPerView={1}
          centeredSlides
          className="contactSwiper"
        >
          {imgSlider.map((img, i) => (
            <SwiperSlide key={i}>
              <img src={require(`${img}`)} alt="slide1" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
