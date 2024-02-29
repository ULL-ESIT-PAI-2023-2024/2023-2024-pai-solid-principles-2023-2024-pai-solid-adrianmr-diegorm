
interface Character {
  shoot(): void;
  swim(): void;
  talk(): void;
  dance(): void;
}

class Troll implements Character {
  public shoot(): void {
  }
  public swim(): void {
   // a troll can't swim
  }
  public talk(): void {
  }
  public dance(): void {
  }
}
