from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager


def test_homepage():

    options = Options()

    options.binary_location = "/snap/bin/chromium"

    options.add_argument("--headless=new")
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-dev-shm-usage")

    driver = webdriver.Chrome(
        service=Service(ChromeDriverManager().install()),
        options=options,
    )

    driver.get("http://13.55.206.152:3001")

    heading = driver.find_element(By.TAG_NAME, "h1")

    assert heading.text == "DevSecOps CI/CD Deployment Demo"

    driver.quit()