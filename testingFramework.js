
// nameTest: string
// callback: function
export function test(nameTest, callback) {
    console.log("Running test: ", nameTest);

    callback();
}

// value: any
export function expect(value) {

    return {
        // expectedValue: any
        toBe: function(expectedValue) {
            
            if (value === expectedValue) {
                console.log("Passed");
                return true;
            }
            console.log("Failed");
            return false;

        },
    }

}



