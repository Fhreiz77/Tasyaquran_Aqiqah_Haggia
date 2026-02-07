import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const eventDate = new Date('2026-02-12T08:00:00');
      const currentDate = new Date();
      const difference = eventDate - currentDate;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="Hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F8F8E1] via-[#FFC1DA] to-[#FF90BB] py-12 overflow-hidden"
    >
      {/* Animated Background Circles */}
      <motion.div 
        className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#8ACCD5] opacity-20"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-[#FF90BB] opacity-30"
        animate={{ 
          scale: [1, 1.3, 1],
          y: [0, -20, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute top-1/2 right-10 w-24 h-24 rounded-full bg-[#FFC1DA] opacity-25"
        animate={{ 
          x: [0, 20, 0],
          y: [0, -30, 0]
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />

      {/* Dekorasi Bunga di Sudut */}
      <motion.div 
        className="absolute top-0 left-0 w-64 h-64 opacity-30"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="50" cy="50" r="30" fill="#FF90BB" opacity="0.6"/>
          <circle cx="80" cy="40" r="25" fill="#FFC1DA" opacity="0.5"/>
          <circle cx="60" cy="80" r="20" fill="#8ACCD5" opacity="0.4"/>
        </svg>
      </motion.div>
      
      <motion.div 
        className="absolute top-0 right-0 w-64 h-64 opacity-30 transform rotate-90"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="50" cy="50" r="30" fill="#8ACCD5" opacity="0.6"/>
          <circle cx="80" cy="40" r="25" fill="#FF90BB" opacity="0.5"/>
          <circle cx="60" cy="80" r="20" fill="#FFC1DA" opacity="0.4"/>
        </svg>
      </motion.div>

      {/* Konten Tengah */}
      <div className="relative z-10 text-center px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Bismillah */}
          <motion.p 
            className="text-2xl md:text-3xl text-[#FF90BB] mb-6 font-arabic" 
            style={{fontFamily: 'Times New Roman'}}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ
          </motion.p>
          
          {/* Judul */}
          <motion.h2 
            className="text-3xl md:text-4xl text-[#FF90BB] mb-4 font-bold" 
            style={{fontFamily: 'Georgia, serif'}}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Tasyakuran Tasmiyah & Aqiqah
          </motion.h2>
          
          {/* Teks Undangan */}
          <motion.p 
            className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed" 
            style={{fontFamily: 'Georgia, serif'}}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Kami mengundang Anda untuk hadir dalam acara<br/>
            Tasyakuran Tasmiyah dan Aqiqah putri kami:
          </motion.p>
          
          {/* Foto Bayi */}
          <motion.div 
            className="flex justify-center my-6"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.9,
              type: "spring",
              stiffness: 200
            }}
          >
            <div className="relative">
              <motion.div
                className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#FFC1DA] shadow-2xl overflow-hidden bg-white p-1"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src={require('../assets/images/haggia2.jpeg')} 
                  alt="Hagia Sheena Fadilla" 
                  className="w-full h-full object-cover rounded-full"
                />
              </motion.div>
              {/* Decorative elements around photo */}
              <motion.div
                className="absolute -top-2 -right-2 w-8 h-8 bg-[#FF90BB] rounded-full opacity-70"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-2 -left-2 w-6 h-6 bg-[#8ACCD5] rounded-full opacity-70"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              />
            </div>
          </motion.div>
          
          {/* Nama Bayi dengan Pita Pink */}
          <motion.div 
            className="relative inline-block my-8"
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 1, rotate: -2 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <div className="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-[#8ACCD5] to-[#FF90BB] text-white rounded-full hover:from-[#FF90BB] hover:to-[#FFC1DA] transition-all shadow-lg font-semibold">
              <h1 className="text-3xl md:text-4xl font-bold" style={{fontFamily: 'Georgia, serif'}}>
                Hagia Sheena Fadilla
              </h1>
            </div>
          </motion.div>
          
          {/* Countdown Timer */}
          <motion.div 
            className="my-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <p className="text-sm md:text-base text-gray-600 mb-4 italic">
              Hitung Mundur Acara
            </p>
            <div className="flex justify-center gap-3 md:gap-6">
              <motion.div 
                className="bg-white/80 backdrop-blur-sm rounded-lg p-3 md:p-4 shadow-lg border-2 border-[#FF90BB] min-w-[60px] md:min-w-[80px]"
                whileHover={{ scale: 1.05 }}
                animate={{ 
                  boxShadow: ["0 4px 6px rgba(255, 144, 187, 0.2)", "0 8px 12px rgba(255, 144, 187, 0.4)", "0 4px 6px rgba(255, 144, 187, 0.2)"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="text-2xl md:text-4xl font-bold text-[#FF90BB]">{String(timeLeft.days).padStart(2, '0')}</div>
                <div className="text-xs md:text-sm text-gray-600 mt-1">Hari</div>
              </motion.div>
              <motion.div 
                className="bg-white/80 backdrop-blur-sm rounded-lg p-3 md:p-4 shadow-lg border-2 border-[#FFC1DA] min-w-[60px] md:min-w-[80px]"
                whileHover={{ scale: 1.05 }}
                animate={{ 
                  boxShadow: ["0 4px 6px rgba(255, 193, 218, 0.2)", "0 8px 12px rgba(255, 193, 218, 0.4)", "0 4px 6px rgba(255, 193, 218, 0.2)"]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
              >
                <div className="text-2xl md:text-4xl font-bold text-[#FFC1DA]">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-xs md:text-sm text-gray-600 mt-1">Jam</div>
              </motion.div>
              <motion.div 
                className="bg-white/80 backdrop-blur-sm rounded-lg p-3 md:p-4 shadow-lg border-2 border-[#8ACCD5] min-w-[60px] md:min-w-[80px]"
                whileHover={{ scale: 1.05 }}
                animate={{ 
                  boxShadow: ["0 4px 6px rgba(138, 204, 213, 0.2)", "0 8px 12px rgba(138, 204, 213, 0.4)", "0 4px 6px rgba(138, 204, 213, 0.2)"]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
              >
                <div className="text-2xl md:text-4xl font-bold text-[#8ACCD5]">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-xs md:text-sm text-gray-600 mt-1">Menit</div>
              </motion.div>
              <motion.div 
                className="bg-white/80 backdrop-blur-sm rounded-lg p-3 md:p-4 shadow-lg border-2 border-[#FF90BB] min-w-[60px] md:min-w-[80px]"
                whileHover={{ scale: 1.05 }}
                animate={{ 
                  boxShadow: ["0 4px 6px rgba(255, 144, 187, 0.2)", "0 8px 12px rgba(255, 144, 187, 0.4)", "0 4px 6px rgba(255, 144, 187, 0.2)"]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
              >
                <div className="text-2xl md:text-4xl font-bold text-[#FF90BB]">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-xs md:text-sm text-gray-600 mt-1">Detik</div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Doa */}
          <motion.p 
            className="text-sm md:text-base text-gray-600 mb-8 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            Insya Allah akan diselenggarakan pada:
          </motion.p>
          
          {/* Info Tanggal dan Tempat */}
          <motion.div 
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl mb-8 border-2 border-[#FFC1DA]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.7 }}
            whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(255, 144, 187, 0.3)" }}
          >
            <div className="flex items-center justify-center mb-4">
              <div className="bg-[#FF90BB] text-white rounded-full p-3 mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-[#FF90BB] font-bold text-xl">Kamis, 12 Februari 2026</p>
                <p className="text-gray-600">08.00 - selesai</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="bg-[#8ACCD5] text-white rounded-full p-3 mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-[#8ACCD5] font-bold text-xl">Jln. Redakan</p>
              </div>
            </div>
          </motion.div>
          
          {/* Ucapan Terima Kasih */}
          <motion.p 
            className="text-gray-600 text-sm md:text-base mb-2 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.9 }}
          >
            Atas Kehadiran Bapak/Ibu/Saudara/i,<br/>
            kami ucapkan terima kasih.
          </motion.p>
          
          <motion.p 
            className="text-[#F8F8E1] font-bold text-lg md:text-xl mb-4" 
            style={{fontFamily: 'Georgia, serif'}}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.1 }}
          >
            Kami Yang Berbahagia,
          </motion.p>
          
          <motion.p 
            className="text-[#F8F8E1] font-bold text-2xl md:text-3xl" 
            style={{fontFamily: 'Brush Script MT, cursive'}}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 2.3 }}
          >
            Wahyu & Violetta
          </motion.p>
        </motion.div>

        <motion.a
          href="#Events"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-8 px-8 py-3 bg-gradient-to-r from-[#FF90BB] to-[#FFC1DA] text-white rounded-full hover:from-[#FFC1DA] hover:to-[#8ACCD5] transition-all shadow-xl font-semibold"
        >
          Lihat Detail Acara
        </motion.a>
      </div>

      {/* Panah ke Bawah */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-[#FF90BB] text-3xl drop-shadow"
        >
          ↓
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
