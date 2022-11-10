import instance from "@/apis/instance";

const sickAPI = {
  getSick: (value: string) => {
    return instance.get("/sick", { params: { q: value } });
  },
};

Object.freeze(sickAPI);

export { sickAPI };
