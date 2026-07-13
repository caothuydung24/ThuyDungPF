import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'; // 👈 thêm dòng này
import Home from './pages/Home';
import AssignmentDetail from './pages/AssignmentDetail';

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <ScrollToTop /> {/* 👈 thêm dòng này, đặt bên trong Router, ngoài Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/assignments/:id" element={<AssignmentDetail />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
      <Toaster />
    </QueryClientProvider>
  )
}

export default App