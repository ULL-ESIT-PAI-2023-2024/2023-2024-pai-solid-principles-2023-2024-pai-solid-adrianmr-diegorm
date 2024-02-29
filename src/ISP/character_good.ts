


interface Shooter {
  shoot(): void;
 }
 interface Swimmer {
  swim(): void;
 }
 interface Dancer {
  dance(): void;
 }
 
 class Troll implements Shooter, Dancer {
  public shoot(): void {
    // The troll can shoot, poorly, but can
  }

  public dance(): void {
    // The Troll can dance, but not very well
  } 
}
