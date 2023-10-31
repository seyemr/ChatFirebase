# React Firebase Chat Uygulaması

Bu, React ve Firebase kullanılarak geliştirilen basit bir chat uygulamasıdır. Bu uygulama, kullanıcıların sohbet odaları arasında mesajlar göndermelerine olanak tanır.

<img src="/src/gif/gif.gif">
## Gereksinimler

Projeyi yerel olarak çalıştırmak için aşağıdaki gereksinimlere ihtiyacınız olacak:

- [Node.js](https://nodejs.org/) ve [npm](https://www.npmjs.com/): Node.js ve npm, projenin çalıştırılması için gereklidir.
- Firebase Hesabı: Firebase'e bir hesap oluşturmanız ve bir proje oluşturmanız gerekecektir.

## Kurulum

1. Bu deposu yerel olarak klonlayın veya indirin:

   ```bash
   git clone <repository-link>
   ```

2. Proje dizinine gidin:

   ```bash
   cd react-firebase-chat-app
   ```

3. Proje bağımlılıklarını yükleyin:

   ```bash
   npm install
   ```

4. Firebase yapılandırması:

   - Firebase proje ayarlarınızı Firebase konsolunda oluşturun.
   - Firebase yapılandırma bilgilerini `src/firebase.js` dosyasına ekleyin.

5. Projeyi başlatın:

   ```bash
   npm start
   ```

   Uygulama, yerel olarak http://localhost:3000 adresinde çalışacaktır.

## Kullanılan Kütüphaneler

Bu projede aşağıdaki kütüphaneler kullanılmıştır:

- [React](https://reactjs.org/): Kullanıcı arayüzü oluşturmak için.
- [React DOM](https://reactjs.org/docs/react-dom.html): React uygulamasını web sayfasında render etmek için.
- [Reactstrap](https://reactstrap.github.io/): Bootstrap ile uyumlu React bileşenleri kullanmak için.
- [Firebase](https://firebase.google.com/): Oturum açma, kullanıcı yönetimi ve gerçek zamanlı veritabanı için.
- [Universal Cookie](https://www.npmjs.com/package/universal-cookie): Çerezlerle çalışmak için.
- [Bootstrap](https://getbootstrap.com/): Temel stil ve düzenleme için.
- [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/): React uygulamasını test etmek için.
- [@testing-library/jest-dom](https://testing-library.com/docs/queries/about/): Jest testleri için özel DOM eşleştirmeleri.
- [@testing-library/user-event](https://testing-library.com/docs/ecosystem-user-event/): Kullanıcı etkileşimlerini simüle etmek için.

## Lisans

Bu proje [MIT lisansı](LICENSE) altında lisanslanmıştır.

---

Bu README dosyası, projenizi başlatmanıza ve geliştirmenize yardımcı olacak temel bilgileri içermektedir. Projenizi geliştirirken Firebase ve React belgelerini inceleyerek daha fazla bilgi edinebilirsiniz.