import ResumeComp from "../Resume/ResumeComp";
import styles from "./PersonInfo.module.css";
import { useState, useEffect } from "react";
import warningImg from "../../assets/warning-fill.png";

const PersonInfo = ({ data, setData }) => {
  const [nameIsValid, setNameIsValid] = useState(0);
  const [surnameIsValid, setSurnameIsValid] = useState(0);
  const [emailIsValid, setEmailIsValid] = useState(0);
  const [numberIsValid, setNumberIsValid] = useState(0);

  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setData((prevData) => ({ ...prevData, image: objectUrl }));

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile, setData]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };

  const nameChangeHandler = (event) => {
    setData((prevData) => ({ ...prevData, name: event.target.value }));
  };
  const surNameChangeHandler = (event) => {
    setData((prevData) => ({ ...prevData, surname: event.target.value }));
  };
  const aboutMeChangeHandler = (event) => {
    setData((prevData) => ({ ...prevData, about_me: event.target.value }));
  };
  const emailChangeHandler = (event) => {
    setData((prevData) => ({ ...prevData, email: event.target.value }));
  };
  const phoneNumberChangeHandler = (event) => {
    setData((prevData) => ({ ...prevData, phone_number: event.target.value }));
  };

  const geoValidation = (inputText) => {
    const onlyGeo = /^[ა-ჰ]+$/g;
    return onlyGeo.test(inputText);
  };

  const phoneNumValidation = (inputNumber) => {
    const geoNum = /^(\+995)?(79\d{7}|5\d{8})$/;
    return geoNum.test(inputNumber);
  };

  const emailValidation = (inputEmail) => {
    const emailPattern = /^[A-Za-z0-9._%+-]+@redberry.ge$/;
    return emailPattern.test(inputEmail);
  };

  const validateNameHandler = () => {
    data.name.trim().length >= 2 && geoValidation(data.name.trim())
      ? setNameIsValid(1)
      : setNameIsValid(2);
  };

  const validateSurnameHandler = () => {
    data.surname.trim().length >= 2 && geoValidation(data.surname.trim())
      ? setSurnameIsValid(1)
      : setSurnameIsValid(2);
  };

  const validateEmailHandler = () => {
    emailValidation(data.email) ? setEmailIsValid(1) : setEmailIsValid(2);
  };
  const validatePhonenumHandler = () => {
    phoneNumValidation(data.phone_number.trim())
      ? setNumberIsValid(1)
      : setNumberIsValid(2);
  };

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.title_box}>
          <p className={styles.title}>პირადი ინფო</p>
          <div className={styles.logo_line}></div>
        </div>
        <div className={styles.name_cont}>
          <div className={styles.half_width_input_box}>
            <label
              htmlFor="name"
              className={
                nameIsValid === 2 ? `${styles.invalid_input_label}` : undefined
              }
            >
              სახელი:
            </label>
            <div className={styles.input_sibling_box}>
              <input
                type="text"
                name="name"
                id="name"
                className={`${nameIsValid === 1 && styles.input_logo_check} ${
                  styles.half_width_input
                } ${
                  nameIsValid === 1
                    ? styles.green_border
                    : nameIsValid === 2
                    ? styles.red_border
                    : styles.black_border
                }`}
                placeholder="გიორგი"
                value={data.name}
                onChange={nameChangeHandler}
                onBlur={validateNameHandler}
                required
              />
              <div className={styles.warning_icon_box}>
                {emailIsValid === 2 && (
                  <img
                    src={warningImg}
                    alt="warningImg"
                    className={styles.warning_icon}
                  />
                )}
              </div>
            </div>
            <p className={styles.validation_message}>
              მინიმუმ 2 ასო, ქართული ასოები
            </p>
          </div>
          <div className={styles.half_width_input_box}>
            <label
              htmlFor="surname"
              className={
                surnameIsValid === 2
                  ? `${styles.invalid_input_label}`
                  : undefined
              }
            >
              გვარი:
            </label>
            <div className={styles.input_sibling_box}>
              <input
                type="text"
                name="surname"
                id="surname"
                className={`${
                  surnameIsValid === 1 && styles.input_logo_check
                } ${styles.half_width_input} ${
                  surnameIsValid === 1
                    ? styles.green_border
                    : surnameIsValid === 2
                    ? styles.red_border
                    : styles.black_border
                }`}
                placeholder="მუმლაძე"
                value={data.surname}
                onChange={surNameChangeHandler}
                onBlur={validateSurnameHandler}
                required
              />
              <div className={styles.warning_icon_box}>
                {emailIsValid === 2 && (
                  <img
                    src={warningImg}
                    alt="warningImg"
                    className={styles.warning_icon}
                  />
                )}
              </div>
            </div>
            <p className={styles.validation_message}>
              მინიმუმ 2 ასო, ქართული ასოები
            </p>
          </div>
        </div>
        <div>
          <label htmlFor="img-upload" className={styles.file_label}>
            პირადი ფოტოს ატვირთვა
            <span className={styles.upload_button}>ატვირთვა</span>
          </label>
          <input
            type="file"
            name="img-upload"
            id="img-upload"
            className={styles.img_upload}
            onChange={onSelectFile}
          />
        </div>
        <div className={styles.textarea_box}>
          <label htmlFor="about">ჩემს შესახებ:(არასავალდებულო)</label>
          <div className={styles.input_sibling_box}>
            <textarea
              name="about"
              id="about"
              className={styles.textarea_Input}
              placeholder="ზოგადი ინფო შენ შესახებ"
              value={data.about_me}
              onChange={aboutMeChangeHandler}
            />
            <div className={styles.warning_icon_box}></div>
          </div>
        </div>

        <div className={styles.full_width_input_box}>
          <label
            htmlFor="email"
            className={
              emailIsValid === 2 ? `${styles.invalid_input_label}` : undefined
            }
          >
            ელ.ფოსტა:
          </label>
          <div className={styles.input_sibling_box}>
            <input
              type="email"
              name="email"
              id="email"
              className={`${emailIsValid === 1 && styles.input_logo_check} ${
                styles.full_width_input
              } ${
                emailIsValid === 1
                  ? styles.green_border
                  : emailIsValid === 2
                  ? styles.red_border
                  : styles.black_border
              }`}
              placeholder="giorgi777@redberry.ge"
              value={data.email}
              onChange={emailChangeHandler}
              onBlur={validateEmailHandler}
              required
            />
            <div className={styles.warning_icon_box}>
              {emailIsValid === 2 && (
                <img
                  src={warningImg}
                  alt="warningImg"
                  className={styles.warning_icon}
                />
              )}
            </div>
          </div>
          <p className={styles.validation_message}>
            უნდა მთავრდებოდეს @redberry.ge-ით
          </p>
        </div>
        <div className={styles.full_width_input_box}>
          <label
            htmlFor="mobile"
            className={
              numberIsValid === 2 ? `${styles.invalid_input_label}` : undefined
            }
          >
            მობილურის ნომერი:
          </label>
          <div className={styles.input_sibling_box}>
            <input
              type="text"
              name="mobile"
              id="mobile"
              className={`${numberIsValid === 1 && styles.input_logo_check} ${
                styles.full_width_input
              } ${
                numberIsValid === 1
                  ? styles.green_border
                  : numberIsValid === 2
                  ? styles.red_border
                  : styles.black_border
              }`}
              placeholder="+995 598 12 34 56"
              value={data.phone_number}
              onChange={phoneNumberChangeHandler}
              onBlur={validatePhonenumHandler}
              required
            />
            <div className={styles.warning_icon_box}>
              {numberIsValid === 2 && (
                <img
                  src={warningImg}
                  alt="warningImg"
                  className={styles.warning_icon}
                />
              )}
            </div>
          </div>
          <p className={styles.validation_message}>
            უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
          </p>
        </div>
        <div>
          <button className={styles.next_page}>შემდეგი</button>
        </div>
      </div>
      <ResumeComp data={data} preview={preview} />
    </div>
  );
};

export default PersonInfo;
