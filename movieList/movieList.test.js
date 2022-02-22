// Lines 2 through 6 are our boilerplate lines of code, we need them for our tests to work
const {Builder, Capabilities,By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/automation/movieList/index.html')
})

// First we're going to navigate to Movie list
test('testing only testing', async () => {

    // For this line you'll need to put the name of the search bar which you can find by inspecting that element in Chrome
    let addMovie = await driver.findElement(By.xpath('//form/input'))
    
    // This time you'll just finish this string with something you want to search on Google, make sure you leanve that \n !
    await addMovie.sendKeys('wheel of time\n')

    // This line will pause our automation so you can see your search!
    await driver.sleep(2000)

    // We now want our automation to get the search bar again since we're on a new page
    let crossMovie = await driver.findElement(by.xpath("//*[contains(text()'wheel of time'))"))
    
    await crossMovie.click()
    
    let delMovie = await driver.findElement(By.id('wheel of time'))

    await delMovie.click()

    await driver.sleep(2000)

    
})