


interface Developer {
  develop(): void;
}

class FrontendDeveloper implements Developer {
  public develop(): void
  { this.writeHtmlCode(); }
  private writeHtmlCode(): void {
    // The frontend developer can write HTML code
  }
}

class BackendDeveloper implements Developer {
  public develop(): void 
  { this.writeTypeScriptCode(); }
  private writeTypeScriptCode(): void {
    // The backend developer can write TypeScript code
  
  }
}

class SoftwareProject {
  public developers: Developer[];
}
