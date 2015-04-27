/**
 * Created by Deb on 4/26/15.
 */
// making sure the calculator function runs after the page is fully loaded so that it can querySelect my elements
window.onload = function() {

    function Calculator() {

        // created to reference the properties in this constructor inside the nested function in the for loop.
        var self = this;

        // Calculator properties
        this.keys = document.querySelectorAll('span');
        this.outputscreen = document.querySelector('.screen');

        for (var i = 0; i < this.keys.length; i++) {
            // adding a listener to every key. listening for clicks and then running a function.

            console.log("i= "+i);
            this.keys[i].addEventListener('click', function() {

                // if the value is AC
                if (this.innerHTML === "AC") {
                    // then clear the screen.
                    self.outputscreen.innerHTML = "";
                    // if the value is =
                } else if (this.innerHTML === '=') {
                    // set the display of the screen to the result of the evaluation of the current contents.

                    try {
                        //eval("5+8-6+2");
                        self.outputscreen.innerHTML = eval(self.outputscreen.innerHTML);
                    } catch (e) {
                        if (e instanceof SyntaxError) {
                            console.log(self.outputscreen.innerHTML+" "+e.message);
                        }
                        else {
                            console.log("else throw e "+e)
                            throw( e );
                        }
                    }

                    // if the value isn't AC or =, then concatenate the next value to the content of the screen.
                } else {
                    self.outputscreen.innerHTML += this.innerHTML;
                    console.log(" string= "+this.innerHTML+"  tokens= "+self.outputscreen.innerHTML)
                }
            }, false);


        }
    }

    // running the Calculator function
    Calculator();

};
