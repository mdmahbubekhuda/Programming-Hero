function checkAge() {
    const ageField = document.getElementById('age')
    const ageText = ageField.value
    const errorTag = document.getElementById('error')

    try {
        // console.log(asdf) // this causes error and is caught by catch(err)

        const age = parseInt(ageText)

        if (isNaN(age)) {
            // console.log('age not found', age, ageText);
            throw 'Please enter a number'
        }
        else if (age < 18) {
            throw 'Minors are not applicable'
        }

        errorTag.innerHTML = ''
    }
    catch (err) {
        console.log('Error:', err) // logs the error
        errorTag.innerText = `Error: ${err}` // display an error message
    }
    finally {
        console.log('This will run regardless');
    }
    console.log('This is executing despite getting an Error (try, catch)');
}