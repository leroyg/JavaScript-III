/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding
* 2. Implicit Binding
* 3. New Binding
* 4. Explicit Binding
*
* write out a code example of each explanation above
*/

// Principle 1
function getTakedown(attack) {
    console.log(this);
    return attack;
}
getTakedown(`Double Leg!`);

// code example for Window Binding

// Principle 2
const wrestlerObj = {
    matchStart: `Shake Hands`,
    favoriteTakedown: function(attack) {
        console.log(`Good luck! ${this.matchStart}, now I will takw you down with a ${attack}!`);
        console.log(this);
    }
};

wrestlerObj.favoriteTakedown(`Double Leg`);
// code example for Implicit Binding

// Principle 3
function WrestlingCoach(name, coachingTip) {
    this.coachingTip = coachingTip;
    this.name = name;
    this.sighs = function(){
        console.log(`${this.name} said "${this.coachingTip}"`);
        console.log(this);
    };
}

const coachVinny = new WrestlingCoach(`Coach Vinny`, `Gooooooo!`);
const coachLeRoy = new WrestlingCoach(`Coach LeRoy`, `Heavy hands, move your feet!`);

coachLeRoy.sighs();
coachVinny.sighs();

// code example for New Binding

// Principle 4

// code example for Explicit Binding