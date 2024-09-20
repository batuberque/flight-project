# Uçak Rezervasyon Uygulaması

Bu proje, bir uçak rezervasyon sistemidir. Proje **Frontend**, **Backend** ve **MongoDB** servislerini Docker Compose ile çalıştırmaktadır.

## Gereksinimler

Bu projeyi çalıştırabilmek için aşağıdaki yazılımların bilgisayarınızda kurulu olması gerekmektedir:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Kurulum

Projeyi çalıştırmak için aşağıdaki adımları takip edebilirsiniz:

1. Projeyi yerel bilgisayarınıza klonlayın:

   ```bash
   git clone https://github.com/batuberque/flight-project.git
   cd flight-project
   
2. Orrtam dosyalarınızı oluşturun:
	
 	```bash
     frontend (.env):
     BACKEND_URL=http://localhost:3005
  
     backend (.env)
     MONGODB_CONNECTION_STRING=mongodb://mongodb:27017/ (lokal mongodb bağlantısı için bu url)
     SCHIPHOL_APP_ID=id keyiniz
     SCHIPHOL_APP_KEY=app keyiniz
     FLIGHT_API_URL=https://api.schiphol.nl/public-flights


4. Docker Compose ile projeyi başlatın:

    ```bash
     docker-compose up --build

Kullanım

Uygulamanızın frontend’i varsayılan olarak http://localhost:3000 adresinde çalışacaktır. Backend servisi ise http://localhost:3005 üzerinden ulaşılabilir olacaktır. MongoDB ise localhost:27017 portunda çalışacaktır.

Servisler

	•	Frontend: React veya benzeri bir framework ile oluşturulmuş kullanıcı arayüzü.
	•	Backend: Node.js ile geliştirilmiş API servisleri.
	•	MongoDB: Uygulama verilerini depolamak için kullanılan veritabanı.

	•	frontend:
	•	flight-frontend imajını kullanır ve uygulamanın kullanıcı arayüzünü sunar.
	•	3000 portunu kullanarak dış dünyaya açılır.
	•	Backend’e bağımlıdır ve .env dosyasındaki BACKEND_URL değişkenine ihtiyaç duyar.
	•	backend:
	•	flight-backend imajını kullanır ve API servislerini sunar.
	•	3005 portunu kullanarak dış dünyaya açılır.
	•	MongoDB’ye bağlanmak için MONGODB_CONNECTION_STRING değişkenine ihtiyaç duyar.
	•	mongodb:
	•	mongo:4.4 imajını kullanarak MongoDB veritabanını çalıştırır.
	•	27017 portunu kullanarak dış dünyaya açılır.
