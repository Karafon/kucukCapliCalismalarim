import subprocess

try:
    data = subprocess.check_output(['netsh', 'wlan', 'show', 'profiles']).decode('latin-1').split('\n')
except subprocess.CalledProcessError:
    print("WLAN profilleri alınamadı.")
    data = []

wifi_list = []
for line in data:
    if "All User Profile" in line:
        wifi_profile = line.split(":")[1].strip()
        try:
            results = subprocess.check_output(['netsh', 'wlan', 'show', 'profile', wifi_profile, 'key=clear']).decode('latin-1').split('\n')
            wifi_password = [line.split(":")[1].strip() for line in results if "Key Content" in line]
            if wifi_password:
                wifi_list.append({wifi_profile: wifi_password})
        except subprocess.CalledProcessError:
            print(f"{wifi_profile} için şifre alınamadı.")
            continue

for wifi in wifi_list:
    print(wifi)
