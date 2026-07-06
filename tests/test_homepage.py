from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options


def test_homepage():
    options = Options()

    # Path to Chromium installed via Snap
    options.binary_location = "/snap/bin/chromium"

    # Required for headless execution on Ubuntu/EC2
    options.add_argument("--headless")
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-dev-shm-usage")
    options.add_argument("--disable-gpu")
    options.add_argument("--remote-debugging-port=9222")
    options.add_argument("--window-size=1920,1080")

    driver = webdriver.Chrome(options=options)

    try:
        driver.get("http://13.55.206.152:3001")

        heading = driver.find_element(By.TAG_NAME, "h1")

        assert heading.text == "DevSecOps CI/CD Deployment Demo"

    finally:
        driver.quit()