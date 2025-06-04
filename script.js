// constructor function
function Player(nama)
{
    this.nama = nama;
    this.energy = 100;
    this.heal = (amount) =>
    {
        this.energy += amount;
        return `penambahan energy sebesar ${amount}. Total Energy = ${this.heal}`;
    };
}

player1 = new Player("player1");