import { FaClock, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const EventDetail = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('Events');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const event = {
    title: "Tasyakuran Tasmiyah & Aqiqah",
    babyName: "Hagia Sheena Fadilla",
    date: "Kamis, 12 Februari 2026",
    time: "08.00 - selesai",
    location: "Jln. Redakan",
    mapUrl: "https://maps.app.goo.gl/u5coWeVcW6BRrzev7"
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="Events" className="py-16 px-4 bg-gradient-to-b from-[#F8F8E1] to-white">
      <motion.div 
        className="max-w-4xl mx-auto"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h2 
          className="text-4xl text-center text-[#FF90BB] mb-4 font-bold" 
          style={{fontFamily: 'Georgia, serif'}}
          variants={itemVariants}
        >
          Detail Acara
        </motion.h2>
        <motion.p 
          className="text-center text-gray-600 mb-12"
          variants={itemVariants}
        >
          Acara tasyakuran dan aqiqah putri kami
        </motion.p>
        
        <div className="max-w-2xl mx-auto">
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border-2 border-[#FFC1DA]"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            {/* Foto Bayi */}
            <motion.div 
              className="flex justify-center mb-6"
              initial={{ scale: 0, rotate: -180 }}
              animate={isVisible ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
            >
              <div className="relative">
                <motion.div
                  className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-[#FF90BB] shadow-xl bg-gradient-to-br from-[#FFC1DA] to-[#FF90BB] p-1"
                  whileHover={{ scale: 1.08, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img 
                    src={require('../assets/images/haggia2.jpeg')} 
                    alt="Hagia Sheena Fadilla" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </motion.div>
                {/* Decorative sparkles */}
                <motion.div
                  className="absolute top-0 right-0 text-2xl"
                  animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  ✨
                </motion.div>
              </div>
            </motion.div>

            <motion.h3 
              className="text-2xl font-bold text-[#FF90BB] mb-2 text-center"
              variants={itemVariants}
            >
              {event.title}
            </motion.h3>
            <motion.p 
              className="text-center text-[#FFC1DA] font-semibold mb-6 text-lg"
              variants={itemVariants}
            >
              {event.babyName}
            </motion.p>
            
            <motion.div 
              className="space-y-4 bg-[#F8F8E1] p-6 rounded-xl"
              variants={itemVariants}
            >
              <motion.div 
                className="flex items-start gap-4"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-[#FF90BB] text-white p-2 rounded-full flex-shrink-0">
                  <FaCalendarAlt className="text-lg" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Tanggal</p>
                  <p className="text-gray-600">{event.date}</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-4"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-[#FFC1DA] text-white p-2 rounded-full flex-shrink-0">
                  <FaClock className="text-lg" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Waktu</p>
                  <p className="text-gray-600">{event.time}</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-4"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-[#8ACCD5] text-white p-2 rounded-full flex-shrink-0">
                  <FaMapMarkerAlt className="text-lg" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Lokasi</p>
                  <p className="text-gray-600">{event.location}</p>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="mt-8 text-center"
              variants={itemVariants}
            >
              <p className="text-gray-600 italic text-sm mb-4">
                Merupakan suatu kehormatan dan kebahagiaan bagi kami<br/>
                apabila Bapak/Ibu/Saudara/i berkenan hadir
              </p>
              
              <motion.a
                href={event.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-[#8ACCD5] to-[#FF90BB] text-white rounded-full hover:from-[#FF90BB] hover:to-[#FFC1DA] transition-all shadow-lg font-semibold"
              >
                <FaMapMarkerAlt className="inline mr-2" /> Lihat Lokasi di Google Maps
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default EventDetail;
