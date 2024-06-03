import { instance } from "../api/instance";

export const downloadFile = (link: string, name: string) => {
  instance.get(link).then((json: any) => {
    const data = JSON.stringify(json);
    const blob = new Blob([data], { type: "application/json" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  });
};
