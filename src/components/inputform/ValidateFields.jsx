const validate = (payload, setInvalidFields) => {
  let invalids = 0;
  let fields = Object.entries(payload);
  fields.forEach((item) => {
    if (item[1] === "") {
      setInvalidFields((prev) => [
        ...prev,
        {
          name: item[0],
          message: "Bạn không được bỏ trống trường này.",
        },
      ]);
      invalids++;
    }
  });
  fields.forEach((item) => {
    switch (item[0]) {
      // case "password":
      //   if (item[1].length < 6) {
      //     setInvalidFields((prev) => [
      //       ...prev,
      //       {
      //         name: item[0],
      //         message: "Mật khẩu phải có tối thiểu 6 kí tự.",
      //       },
      //     ]);
      //     invalids++;
      //   }
      //   break;
      case "phone":
        if (!+item[1]) {
          setInvalidFields((prev) => [
            ...prev,
            {
              name: item[0],
              message: "Số điện thoại không hợp lệ.",
            },
          ]);
          invalids++;
        }
        break;
        case "people_numbers":
        case "bedroom_numbers":
        case "bathroom_numbers":
        case "price":
        case "area":
        if (+item[1] == 0) {
          setInvalidFields((prev) => [
            ...prev,
            {
              name: item[0],
              message: "Mời bạn nhập giá trị này.",
            },
          ]);
          invalids++;
        }
        if (!+item[1]) {
          setInvalidFields((prev) => [
            ...prev,
            {
              name: item[0],
              message: "Trường này phải nhập số.",
            },
          ]);
          invalids++;
        }
        break;
      default:
        break;
    }
  });
  return invalids;
};
export default validate;
