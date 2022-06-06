window.onsubmit = (form) =>
{
    form.preventDefault()
    const yearBirth = form.target.querySelector('#birth').value
    const male = form.target.querySelector('#male').checked
    const female = form.target.querySelector('#female').checked

    console.log(`Year of Birth => ${yearBirth}`)
    console.log(`Male => ${male}, Female => ${female}`)
}