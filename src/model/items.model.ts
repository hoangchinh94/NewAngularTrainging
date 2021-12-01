export class Item {
  public  name: string;
  public  type: string;
  public  srcUrl: string;

  constructor(name: string, type: string, srcUrl: string) {
      this.name = name;
      this.type = type;
      this.srcUrl = srcUrl;
  }
}