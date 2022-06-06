window.onsubmit = (form) =>
{
    form.preventDefault()
    const yearBirth = form.target.querySelector('#birth').value
    const male = form.target.querySelector('#male').checked
    const female = form.target.querySelector('#female').checked

    const ageBirth = (birth) =>
    {
        // We can use "Date" from JS to get the fullYear
        const age = 2022 - birth
        return age
    }
    const stageCheck = (stage) =>
    {
        if(stage == 0){return}
        if(stage <= 10){return 'Child'}
        if(stage > 10 && stage <= 20){return 'Teen'}
        if(stage > 20){return 'Adult'}
        if(stage > 104){return false}
    }
    const genderCheck = (gender) =>
    {
        if(gender == true){}
    }


    // ate 10 anos = bebe
    // ate 20 = adolescente
    // acima de 20 = adulto
}